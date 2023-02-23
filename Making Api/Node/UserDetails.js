const mongoose=require("mongoose");

const UserDetailScehma= new mongoose.Schema(
    {
        fname: String,
        lname:String,
        email:String,
    },
    {
        collection: "NewUserInfo",
    }
);

mongoose.model("NewUserInfo",UserDetailScehma);

// mongoose.Schema