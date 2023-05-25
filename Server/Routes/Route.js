import express from 'express';
import { SignupUser,LoginUser } from '../Controllers/user_controllers.js';
import { protectRoute } from './Protect_Route.js';
import { uploadImage } from '../Controllers/image_control.js';
import {createPost, getPost} from '../Controllers/Post_Controller.js'
// import upload from '../utils/upload.js';

const app=express();
app.use(express.json());
//Mountings//

const AuthRouter=express.Router();
const UploadRouter=express.Router();
const CreateRouter=express();
const PostRouter=express();
// app.use('/signup',AuthRouter);

AuthRouter
.route("/signup")
.post(SignupUser)

AuthRouter
.route("/login")
.post(protectRoute,LoginUser);

UploadRouter
.route('/upload')
// .post(upload.single('file'),uploadImage)
.post(uploadImage);

CreateRouter
.route('/create')
.post(createPost)

PostRouter
.route('/getpost')
.get(getPost);


export  {AuthRouter,UploadRouter,CreateRouter,PostRouter};
