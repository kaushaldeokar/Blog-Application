
const url=''

export const uploadImage=(req,res)=>{

    if(!req.file){
        return res.status(404).json({
            msg:"FILE NOT FOUND",
        })
    }

    const imageUrl=`${url}/file/${req.file.filename}`;

    return res.status(200).json(imageUrl);

}