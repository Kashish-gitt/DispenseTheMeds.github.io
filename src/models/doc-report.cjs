const mongoose=require("mongoose");
const ReportSchema=new mongoose.Schema({
    
    testType:{
        type:String,
        required:true
    },
    Result:{
        type:String,
        required:true
    },
    Units:{
        type:String,
        required:true
    },
    ReferenceData:{
        type:String,
        required:true
    }
    
})

const Report=new mongoose.model("Report",ReportSchema);
module.exports=Report;