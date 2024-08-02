const UserModel = require(`../models/user.model`);

module.exports=function ssBuildUserObject(userFromDB){
    const UserModelObj=UserModel.schema.obj;
    const UserModelPathsObj=UserModel.schema.paths;
    const allUserModelProps=Object.keys(UserModelObj);
    allUserModelProps.unshift(`_id`);
    const pWordPropIndex=allUserModelProps.indexOf(`password`);
    allUserModelProps.splice(pWordPropIndex,1);
    const builtUserObj={};
    const optionalProps=[];
    for(let i=0;i<allUserModelProps.length;i++){
        let thisProp=allUserModelProps[i];
        if(thisProp===`_id`||UserModelObj[thisProp][`required`]){
            builtUserObj[thisProp]=userFromDB[thisProp]
        }else{
            optionalProps.push(thisProp)
        };
    }
    optionalProps.push(`createdAt`,`updatedAt`);
    for(let i=0;i<optionalProps.length;i++){
        let thisProp=optionalProps[i];
        let userFromDBHasThisProp=userFromDB[thisProp]?true:false;
        if(userFromDBHasThisProp){
            builtUserObj[thisProp]=userFromDB[thisProp]
        }else{
            if(UserModelPathsObj[thisProp][`instance`]===`Boolean`){
                builtUserObj[thisProp]=false
            }else{
                builtUserObj[thisProp]=``
            }
        }
    }
    return(builtUserObj)
}