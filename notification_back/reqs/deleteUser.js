const users=require('../model/user');
const instructor=require('../model/instructure');
const student=require('../model/student');
const deleteUser= async(req,res)=>{


let query={
    _id:{

    $in:req.body.user}};


   await users.deleteMany(query);

   query={
    userInfo:{

    $in:req.body.instructor}};  
    await instructor.deleteMany(query);    



    query={
        userInfo:{
    
        $in:req.body.student}};  
        await student.deleteMany(query);    
    console.log(req.body);


    const user=await users.find({},{__v:0});

res.status(200).send(user);



};
module.exports=deleteUser;