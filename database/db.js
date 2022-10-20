const mongoose =require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/TOdo',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connected to mongodb");
}).catch(e=>{
    console.log(e)
})