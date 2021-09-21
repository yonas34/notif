const blockSchema=require('../model/blocks');

const add_block=async (req,res)=>{

console.log(req.body)
const {name,capacity} =req.body;

if(!name && !capacity)
res.status(400).send('block name and capacity is required!');
const room=[];
for(var i=0;i<=capacity;i++)
{

    room.push({number:i,free:true});
}

const block=blockSchema.create({

name:name,
capacity:capacity,
room:room
})


res.status(200).send(block);



}
module.exports=add_block;