const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
listOfClasses:[{class:{type:mongoose.Schema.Types.ObjectId,ref:"class"},course:{type:mongoose.Schema.Types.ObjectId,ref:"course"}}],
userInfo:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
scheduleList:[{
    startDate:{type:Date},
    endDate:{type:Date},
    course:{type:mongoose.Schema.Types.ObjectId,ref:"class"}
}],
incomingQuestions:[{type:mongoose.Schema.Types.ObjectId,ref:"question"}]
});
const model=mongoose.model("instructor",userSchema);
console.log(model);
module.exports=model;