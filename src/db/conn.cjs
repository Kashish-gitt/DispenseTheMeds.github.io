const mongoose=require("mongoose");
mongoose.set("strictQuery",true);

mongoose.connect("mongodb://0.0.0.0:27017/loginRegistration");

const db = mongoose.connection;

db.on('error',(error) => {
    console.log(error)
})

db.once('open',() => {
    console.log("connection is successful!");
})