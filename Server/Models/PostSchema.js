import mongoose from "mongoose";

const Postschema=mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
    },
    categories:{
        type:String,
        required:true,
    },
    FullName:{
        type:String,
        required:true,
    },
    createdData:{
        type:String,
    }
})

const PostModel=mongoose.model('Post',Postschema);


// /delete comand
// const del_Data=async()=>{
//     let data=await PostModel.deleteMany();
// }
// del_Data();

export default PostModel;