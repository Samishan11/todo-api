const mongoose = require('mongoose');

const Todo = mongoose.model("Todo",{
    name:{
        type:String,
    },
    age:{
        type:String,
    },
    desc:{
        type:String,
        require:true,
    }
})

module.exports = Todo;