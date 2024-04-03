const multer = require('multer')
const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        // console.log('multer')
        cb(null, 'uploads/images')
    },
    filename:(req, file, cb)=>{
        cb(null, Date.now()+file.originalname)
    }
})
const imageFilter = (req, file, cb) => {
    if(!file.originalname.match(/\.(jpeg|jpg|gif|png)$/)){
        return cb(new Error('only image can be uploaded'), false)
    }
    cb(null, true)
}
const upload = multer({storage, fileFilter:imageFilter})
module.exports = upload