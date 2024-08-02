const config=require(`config`);
const express = require(`express`);
const cors = require('cors');
const odmLibrary = require('mongoose');

const app = express();

const recipeImportScript=require(`./importRecipesScript`);
const dayImportScript=require('./importDaysScript')
const mealImportScript=require('./importMealsScript');
const mealIngrdntImportScript=require('./importMealIngrdntsScript');

app.use(cors());
app.use(express.json());

const defaultPort=config.get(`port`);
const defaultEnv=config.get(`env`);
const defaultName=config.get(`name`);
const defaultJwtPrivateKey=config.get(`jwtPrivateKey`);
const defaultRequiresAuth=config.get(`requiresAuth`);
const defaultFrontEndHtmlRoot=config.get(`frontEndHtmlRoot`);
const defaultBackEndHtmlRoot=config.get(`backEndHtmlRoot`);
const dBConnectionString=config.get(`dBConnectionString`);

const port = process.env.PORT||defaultPort;
const env = process.env.NODE_ENV||defaultEnv;

odmLibrary.connect(dBConnectionString,{useNewUrlParser:true});
const dBConnection = odmLibrary.connection;
dBConnection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const fetchWMPAndAllRltdRouter=require(`./routes/fetchWMPAndAllRltd`);
const universalRouter=require(`./routes/universalRouter`);
const loginRouter=require(`./routes/logInUser`);
const copyWMPRouter=require(`./routes/copyWMP`);

app.use(`/fetchWMPAndAllRltd`,fetchWMPAndAllRltdRouter);
app.use(`/copyWMP`,copyWMPRouter);
app.use(`/login`,loginRouter);
app.use(`/`,universalRouter);

console.log(`app env is ${env}`);

app.listen(port,()=>{
    console.log(`listening on port ${port}...`)
});