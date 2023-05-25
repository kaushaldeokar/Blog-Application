
import PostModel from "../Models/PostSchema.js"
export const createPost=async(req,res)=>{

    // validation//
    try{
        let dataObj=await PostModel.create(req.body);
        // console.log(req.body);
        console.log('Recieved data',req.body);

        return res.status(200).json({
            message:"Post Created",
            AddedPost:dataObj,
        })
    }catch(err){
        return res.status(402).json({
            message:"Post cannot be created try again",
        })
    }

    
}

export const getPost=async(req,res)=>{

    // validation//
    // console.log(req.body);
    try{
        let dataObj=await PostModel.find();
        console.log('Recieved data',req);

        return res.status(200).json(dataObj)
    }catch(err){
        return res.status(402).json({
            message:"Post not found",
        })
    }

    
}