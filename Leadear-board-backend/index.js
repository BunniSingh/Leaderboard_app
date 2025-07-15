let express = require('express');
let mongoose = require("mongoose");
let app = express();
require("dotenv").config();

let port = process.env.PORT;
console.log(port)

mongoose.connect(`${process.env.DB_CONNECTION_STRING}/Leader-Board`)
    .then(()=> console.log("DB Connected successFuly✅"))
    .catch((err)=> console.log("DB Connection failed❌", err));


app.listen(port, ()=> console.log("Server started on port number: ", port))


