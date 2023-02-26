const mongoose=require("mongoose");
const PrescriptionSchema=new mongoose.Schema({
    
    one:{
        type:String,
       
    },
    two:{
        type:String
        
    },
    three:{
        type:String
        
    },
    four:{
        type:String
        
    },
    five:{
        type:String
        
    },
    six:{
        type:String
        
    },
    seven:{
        type:String
       
    },
    eight:{
        type:String
        
    },
    medicine:{
        type:String,
        

        
    },
    medicine2:{
        type:String
        
    },
    medicine3:{
        type:String
        
    },
    medicine4:{
        type:String
        
    },
    medicine5:{
        type:String
        
    },
    frequency:{
        type:String,
        
        
    },
    frequency2:{
        type:String
        
    },
    frequency3:{
        type:String
        
    },
    frequency4:{
        type:String
        
    },
    frequency5:{
        type:String
        
    },
    days:{
        type:String,
        
        
    },
    days2:{
        type:String
        
    },
    days3:{
        type:String
        
    },
    days4:{
        type:String
        
    },
    days5:{
        type:String
        
    },
    TestSugg1:{
        type:String

    },
    TestSugg2:{
        type:String

    },
    TestSugg3:{
        type:String

    },
    After1:{
        type:String

    },
    After2:{
        type:String

    },
    After3:{
        type:String

    }


    
})

const Prescription=new mongoose.model("Prescription",PrescriptionSchema);
module.exports=Prescription;