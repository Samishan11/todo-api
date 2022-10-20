require('./database/db')
const express = require('express')
const cors = require('cors')
const app = express();
const route = require('./routes/route');

app.use(cors())
app.use(express.json());
app.use("/", route)
app.listen(8000 , ()=>{
    console.log("Server running on port 8000")
})