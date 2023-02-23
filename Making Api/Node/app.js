const express=require("express");
const app=express();
const mongoose=require("mongoose");
app.use(express.json());
const cors=require("cors");
app.use(cors());


const mongoUrl =
  "mongodb+srv://getgopalbansal:oz40QnqyJBE9Xpdm@cluster0.yfitddq.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoUrl,{
    useNewUrlParser:true
}).then(()=>{console.log("Connection was successful");})
.catch(e=>{console.log(e);})


require("./UserDetails");

const User= mongoose.model("NewUserInfo");

app.post("/SignUp",async(req,res)=>{
    const {fname,lname,email}= req.body;
    console.log("recieved!");
    console.log(fname,lname,email);
    try {
        await User.create({
            fname:fname,
            lname:lname,
            email:email,
        });
        res.send({
            status:"ok"
        });
    } catch (error) {
        res.send({
            status:"error"
        });
    }
})

// app.get("/",function(req,res){
//     res.send("Hello Gopal") ;
// });

app.post("/post",function(req,res){
    console.log(req.body);
})

app.listen(5000,()=>{
    console.log("Server Started on port 5000"); 
});


