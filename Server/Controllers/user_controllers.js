import UserModel from "../Models/user.js";
import jwt from 'jsonwebtoken';
const JWT_KEY='inewicnvinvvneivniv'
//jwt install//jwt_key

//or could have used body parser in place of express.json()

const SignupUser= async (req,res)=>{
    
    try{
        //request recieved converted to json data
        let dataObj=await UserModel.create(req.body);
        console.log('Recieved data',req.body);
        
        return res.status(200).json({
            message:"Signup Successfull",
            AddedUser:dataObj,
        })

    }catch(err){
        console.log(err);
        return res.status(500).json({
            msg:"Error Signing Up",
        })

    }
}


const LoginUser=async(req,res)=>{

     console.log(req.body.Email);

     let user=await UserModel.findOne({Email:req.body.Email});
     console.log(user);

     if(user===null){
        return res.status(400).json({message:"UserSignup required"});
     }

     if(user.Password===req.body.Password){
        //now  we have to generate access token to validate user//
        let uid=user['_id'];
        let token=jwt.sign({payload:uid},JWT_KEY);
        //sending cookie login to browser//
        res.cookie('login',token,{httpOnly:true});
        
        res.status(200).json({
            message:"Logged In",
            User:user,
        })

     }else{
        return res.status(400).json({message:"Password Invalid"});
     }

    // res.status(200).json({
    //     msg:"Login request",
    // })

    
    
}

export {SignupUser,LoginUser};