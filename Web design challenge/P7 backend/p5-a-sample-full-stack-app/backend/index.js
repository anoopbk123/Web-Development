const express = require('express')
const cors = require('cors')
const app = express()
const dbConnection = require('./Config/dbConnection')
const promotionRouter = require('./routers/promotionRouter')

app.use(express.json())
app.use(cors())
dbConnection.dbConnect()

app.get('/', (req, res)=>{
    res.end('hello');
})

app.use('/promotion', promotionRouter);

app.listen(4000, ()=>{
    console.log('sever running at 4000')
})