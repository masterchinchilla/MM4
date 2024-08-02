const config=require(`config`);
const jwt = require(`jsonwebtoken`);
const router = require(`express`).Router();
const bcrypt=require(`bcrypt`);

const User = require(`../models/user.model`);

const ssBuildUserObject = require(`../ssServices/ssBuildUserObject`);

router.post('/',async (req, res)=>{
    try {
        const existingUser=await User.findOne({email:req.body.email});
        try {
            const validPassword= await bcrypt.compare(req.body.password,existingUser.password);
            if(validPassword){
                const currentUser=ssBuildUserObject(existingUser);
                const token=jwt.sign({currentUser},config.get('jwtPrivateKey'));
                res
                    .header('x-auth-token',token)
                    .header('access-control-expose-headers','x-auth-token')
                    .send(currentUser);
            }else{
                res.status(400).json([{all:`Invalid email or password`}])
            }
        } catch (errs) {
            res.status(400).json([{all:`Invalid email or password`}])
        }
    } catch (errs) {
        return res.status(400).json([{all:`Invalid email or password`}])
    }    
})
module.exports=router;