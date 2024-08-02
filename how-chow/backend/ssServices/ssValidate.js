const Joi =require(`joi`);

const valSchema=require(`../ssStaticRefs/universalJoiValSchemaSS`);

const {recordAndFieldNameDefs} =require( `../ssStaticRefs/recordAndFieldNameDefs`);
const {rcrdKeysToExcldFrmUpdtOrAdd} =require( `../ssStaticRefs/rcrdKeysToExcldFrmUpdtOrAdd`);

function ssValidateProp(propName, value, propTypeForVal) {
    const rule = valSchema.extract(propTypeForVal);
    const subSchema = Joi.object({ [propName]: rule });
    const objToValidate = { [propName]: value };
    const { error } = subSchema.validate(objToValidate);
    return error ? error.details[0].message : null;
};
async function ssValidateProps(objTypeSnglrSntncCase, recordId, propsArray, req, res){
    const valErrorsArray=[];
    for(let i=0;i<propsArray.length;i++){
        let {thisPropsName,thisPropNameSentenceCase,thisPropsValue,thisPropTypeForVal,PropObjModel}=propsArray[i];
        if(thisPropTypeForVal===`objRef`){
            let thisPropsValueId=thisPropsValue._id;
            try {
                const foundRecord=await PropObjModel.findById(thisPropsValueId);
                if(!foundRecord){
                    const errMsg=thisPropsName===`user`?`Invalid author`:`${thisPropNameSentenceCase} not found`;
                    valErrorsArray.push({[thisPropsName]:[errMsg]})
                    res.status(404).json(valErrorsArray);
                    return false;
                };
            } catch (errs) {
                res.status(500).json([{all:`Server error, refresh, wait a moment and try again`}]);
            }
        }else{
            let MatchingKeyValsToExcldFrmUpdt=rcrdKeysToExcldFrmUpdtOrAdd.filter(keyToExcld=>keyToExcld===thisPropsName);
            if(MatchingKeyValsToExcldFrmUpdt.length<1){
                let thisPropsErrs=[];
                let thisPropsValError=ssValidateProp(thisPropsName, thisPropsValue, thisPropTypeForVal);
                if(thisPropsValError){thisPropsErrs.push(thisPropsValError)};
                if(thisPropsName===`name`&&objTypeSnglrSntncCase!==`Day`){
                    let matchingRecords=[];
                    try {
                        matchingRecords=await PropObjModel.find({name:thisPropsValue});
                    } catch (error) {
                        res.status(500).json([{all:`Server error - please try again in a moment`}])
                    }
                    let nameError;
                    for(let i=0;i<matchingRecords.length;i++){
                            if(!(matchingRecords[i]._id.equals(recordId))){
                                nameError=`Another ${objTypeSnglrSntncCase} is already using that name`}
                        }
                    if(nameError){thisPropsErrs.push(nameError)};
                };
                if(thisPropsErrs.length>0){valErrorsArray.push({[thisPropsName]:thisPropsErrs})};
            }
        }
    };
    if(valErrorsArray.length>0){  
        res.status(400).json(valErrorsArray);
        return false;
    }else{
        return true
    };
};
async function ssValidateObjectSrvc(typeOfRecordToChange, recordToUpdate, req, res){
    let typeOfRcrdToChngSntncCase= recordAndFieldNameDefs[typeOfRecordToChange][`nameSntncCase`];
    let recordId=recordToUpdate._id;
    let propsArray=[];
    let recordKeys = Object.keys(recordToUpdate);
    for(let i=0;i<recordKeys.length;i++){
        let thisRecordKey=recordKeys[i];
        let PropObjModel;
        if(thisRecordKey===`name`){
            PropObjModel=recordAndFieldNameDefs[typeOfRecordToChange][`PropObjModel`]
        }else{PropObjModel=recordAndFieldNameDefs[thisRecordKey][`PropObjModel`]}
        let thisPropObj={
            thisPropsName: thisRecordKey,
            thisPropNameSentenceCase: recordAndFieldNameDefs[thisRecordKey][`nameSntncCase`],
            thisPropsValue: recordToUpdate[thisRecordKey],
            thisPropTypeForVal: recordAndFieldNameDefs[thisRecordKey][`propTypeForVal`],
            PropObjModel:PropObjModel
        };
        propsArray.push(thisPropObj)
    };
    return await ssValidateProps(typeOfRcrdToChngSntncCase, recordId, propsArray, req, res);
}
module.exports= {ssValidateProp,ssValidateObjectSrvc};