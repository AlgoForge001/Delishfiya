const express= require("express");
const app = express();
const path = require("path");

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname , "public")));
app.use("/public" , express.static("public"));


app.get("/" , (req , res)=>{
    res.render("../views/index.ejs");
});


app.get("/home" , (req , res)=>{
    res.render("../views/landing.ejs");
})

app.get("/about" , (req , res)=>{
    res.render("../views/about.ejs");
})

app.get("/contact" , (req , res)=>{
    res.render("../views/contact.ejs");
});
app.get("/menu" , (req , res)=>{
    res.render("../views/menu.ejs")
})

app.listen(3000 , ()=>{
    console.log("Server is Working on port 3000");
})