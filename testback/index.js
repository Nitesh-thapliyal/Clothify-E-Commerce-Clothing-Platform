const express = require("express")
const app = express();

// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const port = 8000

app.get("/", (req, res) =>{
   return  res.send("Home Page!");
});


//Middleware
const isAdmin = (req, res, next) => {
    console.log("Is admin is running!")
    next();
}
//Middleware
const isLoggedin = (req, res, next)=>{
    console.log("Is logged in is running!")
    next()
}

const dashboard = (req, res)=>{
    return res.send("Home Dashboard")
};
app.get("/dashboard", isLoggedin, isAdmin, dashboard)





app.get("/admin", (req, res)=>{
    return res.send("Admin Page");
})

app.get("/login", (req, res) => {
    return res.send("Login Page!");
});

app.get("/signup", (req, res) => {
    return res.send("SignUp Page!");
});

app.get("/signout", (req, res) => {
    res.send("SignOut Page!");
});

app.listen(port, () => {
    console.log("Server is up and running");
});