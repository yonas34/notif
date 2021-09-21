const instructorSchema=require('../model/instructure');
const questionSchema=require('../model/questions');
const studentSchema=require('../model/student');
const ask=async (req,res)=>{
const {fromStudent,Question,instructor_id}=req.body;
if(!(fromStudent&&Question&&instructor_id))
res.status(400).send("all inputs are required!");
const data={Question:Question,fromStudent:fromStudent};

// const doc=await instructorSchema.findOneAndUpdate({_id:instructor_id},{new:true},(data)=>{console.log(data)});
const question=await questionSchema.create({
Question:Question,
fromStudent:fromStudent,
answers:{answeredBy:"610afa5f49f51d74139da9d1",answer:"hola!"}

});
console.log(question);
await studentSchema.findByIdAndUpdate(fromStudent,{$push:{askedQuestions:question._id}});
 await instructorSchema.findByIdAndUpdate(instructor_id,{$push:{incomingQuestions:question._id}});
// let doc=await instructorSchema.findById(instructor_id).populate("incomingQuestions").populate("incomingQuestions.fromStudent");
const doc=await studentSchema.findById(fromStudent).populate('askedQuestions');
console.log(doc);
res.status(200).send(doc);
    
    }
    module.exports=ask;