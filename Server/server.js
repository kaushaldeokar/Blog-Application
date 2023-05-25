import express from 'express';
import Connection from './DataBase/db.js';
import {AuthRouter,UploadRouter,CreateRouter,PostRouter} from './Routes/Route.js';
import * as dotenv from 'dotenv' 
dotenv.config()
import cors from 'cors';
import emailValidator from 'email-validator'
import cookieParser from 'cookie-parser';

const app=express();
app.use(cookieParser())
app.use(express.json());//yeh entry point pr likhte h jaha se request aati h
app.use(cors());

app.use('/auth',AuthRouter);
app.use('/file',UploadRouter);
app.use('/',CreateRouter);
app.use('/',PostRouter);

if(process.env.NODE_ENV ==='production'){
    app.use(express.static("client/build"));
}

app.get('/',(req,res)=>{
    res.send('hi we are live');
});

const PORT=process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log("Listening at post : 8000");
})
const UserName=process.env.DB_USERNAME;
const Password=process.env.DB_PASSWORD;
const db_link =process.env.MONGODB_URI || `mongodb+srv://${UserName}:${Password}@blog-app.aqtntyv.mongodb.net/`;
  

Connection(db_link);



