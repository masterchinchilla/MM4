const jwt=require(`jsonwebtoken`);
const config=require(`config`);

const ssBuildUserObject = require(`../ssServices/ssBuildUserObject`);

module.exports=function authenticate(req, res, next){
    if(!config.get(`requiresAuth`)){next()}else{
        const token=req.header(`x-auth-token`);
        if(!token) {res.status(401).json(`Access denied. No token provided.`)}else{
            try {
                const decodedToken = jwt.verify(token,config.get(`jwtPrivateKey`));
                const builtUserObj=ssBuildUserObject(decodedToken.currentGRFUser)
                req.currentGRFUser=builtUserObj;
                next();
            } catch (ex) {
                res.status(400).json(`Invalid token.`);
            };
        };
    };
};