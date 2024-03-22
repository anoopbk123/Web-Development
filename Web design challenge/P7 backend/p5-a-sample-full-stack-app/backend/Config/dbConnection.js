const mongoose = require('mongoose')
module.exports = {
    dbConnect: async () => {
        try{
            await mongoose.connect('mongodb://127.0.0.1:27017/advertisement')
            .then(()=>{
                console.log('data base connected');
            })
        }
        catch(err){
            console.log(err)
        }
    }
}