const mongoose=require("mongoose");
const StudentSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    MobileNumber:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    BloodGroup:{
        type:String,
        required:true
    },
    Gender:{
        type:String,
        required:true
    },
    Age:{
        type:Number,
        required:true
    },
    
    
    password:{
        type:String,
        required:true
    }

})

const Login=new mongoose.model("Login",StudentSchema);
module.exports=Login;