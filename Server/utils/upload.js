/// for middle ware//
// converting binary data to the  files and directly uploading data to mongodb
import multer from 'multer'
import {GridFsStorage} from 'multer-gridfs-storage';


  


const storage=new GridFsStorage({
     db_link : `mongodb+srv://kaushal:kaushal@blog-app.aqtntyv.mongodb.net/`,
     options:{useNewUrlParser:true},
     file:(request,file)=>{
        const match=["image/png","image/jpg"];

        if(match.indexOf(file.memeType)===-1){
            //so that image donot duplicate so concatination 
            return `${Date.now()}-blog-${file.originalname}`;
        }

        return {
            bucketName:"photos",
            filename:`${Date.now()}-blog-${file.originalname}`
        }

     }
    })

    
    export default multer({storage});