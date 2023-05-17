import cors from 'cors'
import express from 'express'
import consign from 'consign'
import bodyParser from 'body-parser'

const appConf = express();

appConf.use(cors());
appConf.options('*', cors());

appConf.use(bodyParser.json())

consign({cwd: process.env.NODE_ENV === "DEV" ? "./src" : "./"})
.include("routes/four-in-a-row/")
.into(appConf);

appConf.use("/", express.static("./src/public"));

appConf.use('/', (req, res)  => {
})

export default appConf;
