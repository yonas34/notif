const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
userInfo:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
batch:{type:String},
departement:{type:String},
dorm:{block:{type:String},dorm:{type:String}}
});
const model=mongoose.model("student",userSchema);
console.log(model);
module.exports=model;