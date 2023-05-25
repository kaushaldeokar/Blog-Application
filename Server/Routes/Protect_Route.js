//intall jwt
// JWT_KEY
import jwt from 'jsonwebtoken'
const JWT_KEY='inewicnvinvvneivniv';
import cookieParser from 'cookie-parser';

//

//


const protectRoute= (req,res,next)=>{
    
    // console.log(req.cookies);
    // res.json(req.cookies)
    
    // if(req.cookies.login){
    //     let isVerified= jwt.verify(req.cookies.login,JWT_KEY);
    //         if(isVerified){
    //             next();
    //         }else{
    //             return res.status(500).json({
    //                 message:"Invalid User",
    //             })
    //         }
    // }
    next();

     
}

export {protectRoute};