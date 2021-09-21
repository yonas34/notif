const mongoose=require('mongoose');
const deepPopulate=require('mongoose-deep-populate');
const userSchema=new mongoose.Schema({
name:{type:String},
capacity:{type:Number},
room:[{number:{type:Number,unique:true},free:{type:Boolean,default:false}}]
});
const model=mongoose.model("block",userSchema);
console.log(model);
module.exports=model;