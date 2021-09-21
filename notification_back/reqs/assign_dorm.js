const questionsSchema=require('../model/questions');
const studentSchema=require('../model/student');
const blockSchema=require('../model/blocks')
const assign_dorm=async (req,res)=>{

console.log(req.body);
const {type,student_id,block_name,room_number}=req.body;



if(!type && !student_id && !block_name && !room_number)
res.status(201).send("all inputs are required!");




const block=await blockSchema.findOne({name:block_name});



if(type==='one')
{
if(!block.room.find(obj=>obj.number===room_number).free)
res.status(401).send("room occupied!");


const student=await studentSchema.updateMany({_id:student_id},{dorm:{dorm:room_number,block:block_name}});
block.room.find(obj=>obj.number===room_number).free=false;
console.log(block.room);
const updated_block=await blockSchema.updateOne({name:block_name,'room.number':room_number},{$set:{'room.$.free':false}},(err)=>{
    console.log(err)
});

console.log(updated_block);



}
if(type==='many')
{

    const student=await studentSchema.updateMany({_id:{$in:student_id}},{dorm:{dorm:{$inc:{seq:1}},block:block_name}});
    console.log(student);



}






    
    }
    module.exports=assign_dorm;