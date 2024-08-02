const {recordAndFieldNameDefs} =require( `../ssStaticRefs/recordAndFieldNameDefs`);

function dtrnmPrntRcrdIdFn(childRecordType,childRecord){
    let prntRcrdAthrId;
    switch(childRecordType){
        case"meal":
            prntRcrdAthrId=childRecord.day.weekMealPlan.user._id;
            break;
        case"mealIngredient":
            prntRcrdAthrId=childRecord.meal.day.weekMealPlan.user._id;
            break;
        case"day":
            prntRcrdAthrId=childRecord.weekMealPlan.user._id;
            break;
        default:
            prntRcrdAthrId=childRecord.genRecipe.user._id;
    }
    return prntRcrdAthrId;
}
module.exports=function authorize(req,res,next){
    const {params,body,currentUser}=req;
    const {recordType}=params;
    const requestorUserIsAdmin=currentUser.isAdmin?true:false;
    const rcrdsPrntRcrdType=recordAndFieldNameDefs[recordType][`prntRcrdType`]
    let rcrdOrPrntRcrdAthrOk=true;
    if(!requestorUserIsAdmin){
        let prntRcrdAthrId;
        const requestorUsersId=currentUser._id;
        const rcrdReqParentAuthorPrmssn=rcrdsPrntRcrdType?true:false;
        if(rcrdReqParentAuthorPrmssn){
            prntRcrdAthrId=dtrnmPrntRcrdIdFn(recordType,body);
        }else{
            prntRcrdAthrId=body.user._id;
        } 
        if(prntRcrdAthrId!=requestorUsersId){rcrdOrPrntRcrdAthrOk=false};
    }
    if(!rcrdOrPrntRcrdAthrOk){
        if(rcrdsPrntRcrdType){
            res.status(401).json([{all:`You do not have access to edit ${recordType}s under this ${rcrdsPrntRcrdType}`}]);
        }else{
            res.status(401).json([{all:`You do not have access to edit this ${recordType}`}]);
        }
    }else{next()};
}