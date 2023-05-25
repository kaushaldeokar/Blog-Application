import mongoose from "mongoose";


const UserSchema =mongoose.Schema({
    FullName:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
        unique:true,
    },
    Password:{
        type:String,
        required:true,
    },
    ConfirmPassword:{
        type:String,
        required:true,
        validate:function(){
            return this.Password===this.ConfirmPassword;
        }
    },
})

//confirm password field will not be added now//
UserSchema.pre('save',function(){
    console.log('before saving',this);
    this.ConfirmPassword=undefined;
})

UserSchema.post('save',function(doc){
    console.log('After saving',doc);
})


//kis collection me push krna h//
const UserModel=mongoose.model('UserModel',UserSchema);




// /delete comand
// const del_Data=async()=>{
//     let data=await UserModel.deleteMany();
// }
// del_Data();

export default UserModel;