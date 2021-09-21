const classSchema=require('../model/class');
const deepPopulate=require('mongoose-deep-populate');
const getAllClasses=async(req,res)=>{
;
const classes=await classSchema.find({}).populate({
path:"courseList",populate:{
    
path:"course instructor",

    populate:{

        path:"userInfo"
    }

}

}).then((data)=>{
    console.log(data);
    res.send(data);
}).catch((err)=>{

    console.log(err);
});
// const classes=await classSchema.deepPopulate('courseList.instructor.userInfo').then((data)=>{
//     console.log(data)
// }).catch((error)=>{

// console.log(error);

// });
//console.log(classes[0].courseList[0].instructor.userInfo);


}
module.exports=getAllClasses;