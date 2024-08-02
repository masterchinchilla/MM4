const mongoose = require("mongoose");
const router = require(`express`).Router();
const Brand =require("../models/brand.model");
const _ = require('lodash');

const authenticate=require(`../middleware/authenticate`);
const authorize=require(`../middleware/authorize`);

const {recordAndFieldNameDefs} =require( "../ssStaticRefs/recordAndFieldNameDefs");
const {rcrdKeysToExcldFrmUpdtOrAdd} =require( "../ssStaticRefs/rcrdKeysToExcldFrmUpdtOrAdd");

const { ssValidateObjectSrvc } = require('../ssServices/ssValidate');

function hndlDtrmnDBSrchPrmsFn(srchParam,srchParamVal,action){
    let dbSearchParamsObj=null;
    if(action===`getSimilar`){srchParamVal=new RegExp(srchParamVal,"i")};
    if(srchParam!=="all"){dbSearchParamsObj={[srchParam]:srchParamVal}};
    return dbSearchParamsObj;
}
function hndlUpdateRcrdWNewValsFn(recordToUpdate,reqBody){
    const recordKeys = Object.keys(reqBody);
    for(let i=0;i<recordKeys.length;i++){
        let thisRecordKey=recordKeys[i];
        let MatchingKeyValsToExcldFrmUpdt=rcrdKeysToExcldFrmUpdtOrAdd.filter(keyToExcld=>keyToExcld===thisRecordKey);
        if(MatchingKeyValsToExcldFrmUpdt.length<1){
            let thisRecordKeysPropType=recordAndFieldNameDefs[thisRecordKey][`propTypeForVal`];
            if(thisRecordKeysPropType===`objRef`){
                recordToUpdate[thisRecordKey]=reqBody[thisRecordKey][`_id`];
            }else{
                recordToUpdate[thisRecordKey]=reqBody[thisRecordKey]
            }
        }
    }
    return recordToUpdate;
}
const arryRcrdTypsHvUsrPrp=[`weekMealPlan`,`genRecipe`,`ingredient`,`brand`,`unitOfMeasure`,`weightType`,`pantryItem`]
async function findAndPopulateFn(recordType,LocalObjModel,dbSearchParamsObj){
    let matchingRecords;
    let rcrdTypHsUsrPrp=arryRcrdTypsHvUsrPrp.filter(rcrdTyp=>rcrdTyp===recordType);
    if(rcrdTypHsUsrPrp.length>0){
        matchingRecords=await LocalObjModel.find(dbSearchParamsObj)
            .populate(`user`)
    }else{
        matchingRecords=await LocalObjModel.find(dbSearchParamsObj)
    }
    return matchingRecords;
}
router.delete(`/delete/:recordType/:id`,[authenticate,authorize],async(req,res)=>{
    const {recordType,id}=req.params;
    const LocalObjModel=recordAndFieldNameDefs[recordType][`PropObjModel`];
    try {
        await LocalObjModel.findByIdAndDelete(id);
        res.status(200).json(`success`);
    } catch (errs) {
        res.status(500).json([{all:`Server error, refresh, wait a moment and try again`}]);
    }
});
router.put(`/update/:recordType/:id`,[authenticate,authorize],async(req,res)=>{
    const {params,body}=req;
    const {recordType,id}=params;
    const recordId=id;
    const LocalObjModel=recordAndFieldNameDefs[recordType][`PropObjModel`];
    try {
        const ssValResult=await ssValidateObjectSrvc(recordType, body, req, res);
        if(ssValResult){
            try {
                const dbSearchParamsObj=hndlDtrmnDBSrchPrmsFn(`_id`,recordId,`update`);
                const matchingRecords=await findAndPopulateFn(recordType,LocalObjModel,dbSearchParamsObj);
                const foundRecord=matchingRecords[0];
                try {
                    await hndlUpdateRcrdWNewValsFn(foundRecord,body).save();
                    res.status(200).json(`success`);
                } catch (errs) {
                    res.status(500).json([{all:`Record save to DB failed, refresh, wait a moment and try again`}])
                }
            } catch (errs) {
                res.status(500).json([{all:`${recordType} not found, it might have already been deleted`}])
            }
        }else{return};
    } catch (errs) {
        res.status(500).json([{all:`Validator call failed, refresh, wait a moment and try again`}])
    }
});
router.post(`/add/:recordType`,[authenticate,authorize],async(req,res)=>{
    const {params,body}=req;
    const {recordType}=params;
    const LocalObjModel=recordAndFieldNameDefs[recordType]["PropObjModel"];
    try {
        const ssValResult=await ssValidateObjectSrvc(recordType, body, req, res);
        if(ssValResult){
            try {
                const recordToUpdate=hndlUpdateRcrdWNewValsFn({},body);
                const newRecord=new LocalObjModel(recordToUpdate);
                try {
                    await newRecord.save();
                    // const allItems=await LocalObjModel.find();
                    res.json(newRecord);
                } catch (errs) {
                    res.status(500).json([{all:`Record save to DB failed, refresh, wait a moment and try again`}])
                }
            } catch (errs) {
                res.status(500).json([{all:`${recordType} not found, it might have already been deleted`}])
            }
        }else{return};
    } catch (errs) {
        res.status(500).json([{all:`Validator call failed, refresh, wait a moment and try again`}])
    }
});
router.get('/getRecordCount/:recordType/:srchParam?/:srchParamVal?',async(req,res)=>{
    const {params}=req;
    const {recordType}=req.params;
    const srchParam=params.srchParam?params.srchParam:"all";
    const srchParamVal=params.srchParamVal?params.srchParamVal:null;
    const dbSearchParamsObj=params.srchParam?hndlDtrmnDBSrchPrmsFn(srchParam,srchParamVal,null):null;
    const LocalObjModel=recordAndFieldNameDefs[recordType]["PropObjModel"];
    try {
        let recordCount=await LocalObjModel
            .countDocuments(dbSearchParamsObj)
        res.json(recordCount);
    } catch (errs) {
        console.log(errs)
        res.status(500).json([{all:`Records lookup failed, refresh, wait a moment and try again`}])
    }
})
router.get('/getPaginatedRcrds/:recordType/:recordsPerPage/:crrntPgStateInt/:srchParam?/:srchParamVal?',async(req,res)=>{ 
    const {params}=req;
    const {recordType,recordsPerPage,crrntPgStateInt}=req.params;
    const numberPgsDistanceFrmZero=crrntPgStateInt>0?crrntPgStateInt-1:0;
    const numberToSkip=recordsPerPage*numberPgsDistanceFrmZero;
    console.log(numberToSkip);
    const srchParam=params.srchParam?params.srchParam:"all";
    const srchParamVal=params.srchParamVal?params.srchParamVal:null;
    const dbSearchParamsObj=params.srchParam?hndlDtrmnDBSrchPrmsFn(srchParam,srchParamVal,null):null;
    const LocalObjModel=recordAndFieldNameDefs[recordType]["PropObjModel"];
    let paginatedRcrds;
    try {
        paginatedRcrds=await LocalObjModel
            .find(dbSearchParamsObj)
            .skip(numberToSkip)
            .limit(recordsPerPage)
        res.json(paginatedRcrds);
    } catch (errs) {
        console.log(errs)
        res.status(500).json([{all:`Records lookup failed, refresh, wait a moment and try again`}])
    }
})
// router.get('/getPagenatedRecipesPerMealType',async(req,res)=>{

// });
router.get('/getSimilar/:recordType?/:srchParam?/:srchParamVal?',async(req, res)=>{
    const {params}=req;
    const {recordType}=params;
    const srchParam=params.srchParam?params.srchParam:"all";
    const srchParamVal=params.srchParamVal?params.srchParamVal:null;
    const dbSearchParamsObj=params.srchParam?hndlDtrmnDBSrchPrmsFn(srchParam,srchParamVal,`getSimilar`):null;
    const LocalObjModel=recordAndFieldNameDefs[recordType]["PropObjModel"];
    try {
        let matchingRecords=await findAndPopulateFn(recordType,LocalObjModel,dbSearchParamsObj);
        res.json(matchingRecords);
    } catch (errs) {
        res.status(500).json([{all:`Records lookup failed, refresh, wait a moment and try again`}])
    }
});
router.get('/:recordType?/:srchParam?/:srchParamVal?',async(req, res)=>{ 
    const {params}=req;
    const {recordType}=params;
    const srchParam=params.srchParam?params.srchParam:"all";
    const srchParamVal=params.srchParamVal?params.srchParamVal:null;
    const dbSearchParamsObj=params.srchParam?hndlDtrmnDBSrchPrmsFn(srchParam,srchParamVal,`get`):null;
    const LocalObjModel=recordAndFieldNameDefs[recordType][`PropObjModel`];
    try {
        let matchingRecords=await findAndPopulateFn(recordType,LocalObjModel,dbSearchParamsObj);
        res.json(matchingRecords);
    } catch (errs) {
        res.status(500).json([{all:`Records lookup failed, refresh, wait a moment and try again`}])
    }
});
module.exports=router;