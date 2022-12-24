require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const cors = require('cors');

const authRoutes = require("./routes/auth");


// DB CONNECTION
mongoose.connect(process.env.DATABASE,
{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=>{
    console.log("DB CONNECTED")
})

// MIDDLEWARE
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


// MY ROUTES
app.use("/api", authRoutes);




// PORT
const port = process.env.PORT || 8000;


// STARTING A SERVER
app.listen(port, ()=>{
    console.log(`app is running at ${port}`); 
});

