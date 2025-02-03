const express=require("express");
const app=express();
const port=3000;

app.use(express.json())
 
app.get("/",(req,res)=>{
    res.send("Hello,World!! The server is running");
});
app.post("/login",(req,res)=>{
    const{Username,email,password,birthdate};
    if(!Username){
        res.status(400)({error:"Username cannot be empty"});
    };
    if(!email){
        res.status(400)({error:"Email cannot be empty"});
    };
    if(password>8){
        res.status(400)({error:"Password length should be greater than 8 or less than equla to 16"});

    };
    if(password<=16){
        res.status(400)({error:"Password length should be greater than 8 or less than equla to 16"});
    }
    res.status(200)({"login done"});
});
app.listen (res.send)=>{
    `the server is runing through prot ${PORT}`
};

