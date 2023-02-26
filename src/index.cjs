const express=require("express");
const path=require("path");
let app=express();
const hbs=require("hbs");
const MongoClient = require('mongodb').MongoClient;
const url="mongodb://localhost:27017/";

require("./db/conn.cjs");
const Login=require("./models/login.cjs");
const Report=require("./models/doc-report.cjs");
const Prescription=require("./models/dprescriptions.cjs");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const port =process.env.PORT || 3000;
console.log(path.join(__dirname,"../public"))
app.use(express.static(path.join(__dirname,"../public")));


app.set("view engine","hbs");
app.set("views",path.join(__dirname,"../templates/views"))
hbs.registerPartials(path.join(__dirname,"../templates/partials"));
app.get ("/",(req,res)=>{
    res.render("login");
})

app.get("/signup",(req,res)=>{
    res.render("signup");
})
app.get("/login",(req,res)=>{
    res.render("login");
})
app.get("/dprescriptions",(req,res)=>{
    res.render("dprescriptions");
})
app.get("/daboutus",(req,res)=>{
    res.render("daboutus");
})
app.get("/doc-stud",(req,res)=>{
    res.render("doc-stud");
})
app.get("/doc_report",(req,res)=>{
    res.render("doc_report");
})
app.get("/doctor-home",(req,res)=>{
    res.render("doctor-home");
})
app.get("/dprofile",(req,res)=>{
    res.render("dprofile");
})
app.get("/saboutus",(req,res)=>{
    res.render("saboutus");
})
app.get("/sprofile",(req,res)=>{
    res.render("sprofile");
    Login.find({}, function(err,logins){
        if(logins){
            return res.render('dprofile',{
                logins
            })
        }
    });
})
app.get("/ssample",(req,res)=>{
    res.render("ssample");
})
app.get("/stud-home",(req,res)=>{
    res.render("stud-home");
})
app.post("/signup", async(req,res)=>{
    try{
          const SignUpDetails=new Login({
            name:req.body.name,
            RollNo:req.body.RollNo,
            BloodGroup:req.body.BloodGroup,
            Gender:req.body.Gender,
            Age:req.body.Age,
            MobileNumber:req.body.MobileNumber,
            email:req.body.email,
            password:req.body.password
          })
        const SignedUp=await  SignUpDetails.save();
        res.status(201).render("doctor-home");
    }catch(error){
        res.status(400).send(error);
    }
})
app.post("/login",async(req,res)=>{
    try{
       const email=req.body.email;
       const MobileNumber=req.body.MobileNumber;
       const password=req.body.password;
const useremail=await Login.findOne({email:email});
if(useremail.password===password){
    res.status(201).render("stud-home")
}else{
    res.send("password is not matching");
}
    }catch(error){
        res.status(400).send("invalid email")
    }
})
app.post("/doc_report", async(req,res)=>{
    try{
          const ReportDetails=new Report({
            testType:req.body.testType,
            Result:req.body.Result,
            Units:req.body.Units,
            ReferenceData:req.body.ReferenceData
          })
        const Reporting=await  ReportDetails.save();
        res.status(201).send("Report is saved");
    }catch(error){
        res.status(400).send(error);
    }
})
app.post("/dprescriptions", async(req,res)=>{
    try{
          const PrescriptionsDetails=new Prescription({
            one:req.body.one,
            two:req.body.two,
            three:req.body.three,
            four:req.body.four,
            five:req.body.five,
            six:req.body.six,
            seven:req.body.seven,
            eight:req.body.eight,
            medicine:req.body.medicine,
            medicine2:req.body.medicine2,
            medicine3:req.body.medicine3,
            medicine4:req.body.medicine4,
            medicine5:req.body.medicine5,
            frequency:req.body.frequency,
            frequency2:req.body.frequency2,
            frequency3:req.body.frequency3,
            frequency4:req.body.frequency4,
            frequency5:req.body.frequency5,
            days:req.body.days,
            days2:req.body.days2,
            days3:req.body.days3,
            days4:req.body.days4,
            days5:req.body.days5,
            TestSugg1:req.body.TestSugg1,
            TestSugg2:req.body.TestSugg2,
            TestSugg3:req.body.TestSugg3,
            After1:req.body.After1,
            After2:req.body.After2,
            After3:req.body.After3,
          })
        const Prescribed=await  PrescriptionsDetails.save();
        res.status(201).send("you have prescribed the medicines");
    }catch(error){
        res.status(400).send(error);
    }
})
app.listen(port,()=>{
console.log("server is running");
})
