const bcrypt=require('bcryptjs');
const jwt = require("jsonwebtoken");
const userSchema=require('../model/user');
const studentSchema=require('../model/student')
const instructorSchema=require('../model/instructure');

const admin_model=require('../model/admin');
const register=async (req,res)=>{

   console.log('registering!');
  console.log(req.body);
   try{
const {first_name,last_name,email,password,user_type}=req.body;
if(!(first_name && last_name && email && password && user_type)){
   res.status(400).send('All input is required');
};
const oldUser=await userSchema.findOne({email});
   if(oldUser){
       return res.status(409).send("user already existes");
   
   }

const user=await userSchema.create({
   first_name:first_name,
last_name:last_name,
email:email,
password:await bcrypt.hash(password,10),
user_type:user_type
});

if(user_type==='student')
{
const {departement,batch,dorm,block}=req.body;

if(!departement && !batch && !dorm && !block)
res.status(400).send('All input is required');

const student=studentSchema.create({
userInfo:user._id,
batch:batch,
dorm:{dorm:dorm,block:block},
departement:departement
});

res.status(200).send(student);
}
if(user_type==='student_union')
{res.statu(200).send("student union registered") }
if(user_type==='registrar')
{res.statu(200).send("registrar registered")     }
if(user_type==='faculty_dean')
{res.statu(200).send("faculty dean registered")      }
if(user_type==='dorm_manager')
{res.statu(200).send("dorm manager registered")    }
if(user_type==='instructor')
{res.statu(200).send("instructor registered")    }
if(user_type==='admin')
{

res.statu(200).send("Admin registered")


}












// if(user_type==="student"){
//  let student=await studentSchema.create({
// classId:null,
// userInfo:user._id,
// // askedQuestions:new Map([['key','value']])
// });
// let doc=await studentSchema.findById(student._id).populate("userInfo");
// res.status(201).send(doc);
// }
// if(user_type==="admin")
// {
// res.status(201).send(user);


// }
// if(user_type==="instructor"){
//  let instructor= await instructorSchema.create({
// //   listOfClasses:[],
//   userInfo:user._id,
// //   scheduleList:[],
//  //incomingQuestions:[{Question:"Questions",isAns:false}],
//   });
//   res.status(201).json(instructor);
// }
  //doc=await instructorSchema.find({incomingQuestions:{$elemMatch:{isAns:false}}}).populate("userInfo");
  
// doc.forEach((incomingQuestions)=>{console.log(incomingQuestions.incomingQuestions)});










//    const {first_name,last_name,email,password,type,class_id}=req.body;
//    if(!(email && password && first_name && last_name && type))
//    {
//        res.status(400).send('All input is required');
//    }
   
//    if(type==="student" && class_id)
//    {res.status(400).send("Student must be assigned to specific class")}
//    const oldUser=type==="instructor"?await instructor.findOne({email}):await student.findOne({email});
//    if(oldUser){
//        return res.status(409).send("user already existes");
   
//    }
//    encryptedPassword=await bcrypt.hash(password,10);
   
//    const user=type==="instructor"? await instructor.create({
//    first_name,
//    last_name,
//    email:email.toLowerCase(),
//    password:encryptedPassword,
   
//    }): await student.create({
//        first_name,
//        last_name,
//        email:email.toLowerCase(),
//        password:encryptedPassword,
//        class:class_id    
//        });
   
//    const token=jwt.sign(
//        {user_id:user._id,email},
//        process.env.TOKEN_KEY,{
//            expiresIn:"2h"
//        }
//    );
//    user.token=token;
//    res.status(201).json(user);
   
   }catch(err){
       console.log(err);
   }
   
   
   }
    module.exports=register;