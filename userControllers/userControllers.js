const { use } = require("../app");

let users=[
    {
        id:123,
        gender:'male',
        name:"showkatul",
        contact:'01850314708',
        address:'chattagram,satkania,Bd',
        photoUrl:'http//:www.facebook.png'
    },{
        id:124,
        gender:'male',
        name:"jayed hossain",
        contact:'01850314709',
        address:'chattagram,satkania,Bd' ,
        photoUrl:'http//:www.facebook.png'      
    },
    {
        id:125,
        gender:'male',
        name:"jayed hossain",
        contact:'01850314709',
        address:'chattagram,satkania,Bd' ,
        photoUrl:'http//:www.facebook.png'      
    }
]

module.exports.randomUser=(req,res)=>{
    const len=users.length
    const userid=Math.floor(Math.random()*len);
    console.log(userid)
    const user=users[userid]
    res.status(200).json(user)
}


module.exports.userAll=(req,res)=>{
    const {limit}=req.query;
    if(users.length>=limit){
        console.log(limit)
        res.send(users.slice(0,limit))
    }else{
        res.send(users)
    }
}



module.exports.saveUser=(req,res)=>{
    const {id,gender,name,contact,address,photoUrl}=req.body;
    if(id && gender && name && contact && address && photoUrl ){
        users.push(req.body)
        res.json(users)
    }else{
        res.send("Given object shoud id,gender,name,contact,address,photoUrl")
    }

}


module.exports.updateUser=(req,res)=>{
    const id=req.params?.id
    const user=users.find(user=>user.id===Number(id))
    if(user){
        const obj=Object.keys(req.body)
        const property=obj[0]
        const value=Object.values(req.body)[0]
        user[property]=value
       res.send(user)

    }else{
        res.send("User not found update")
    }
}

module.exports.updateUsers=(req,res)=>{
    const {id,name}=req.body
    for(let i=0;i<id.length;i++){
        const userid=id.find(user=>user.id==id[i])
        if(userid){
            userid.name=name[i];
        }
    }
    res.send(users)
}


module.exports.DeleteUser=(req,res)=>{
    const id=req.params.id
    const user=users.find(user=>user.id===Number(id));
    console.log(user)
    if(user){
        users=users.filter(user=>user.id!==Number(id));
        console.log("hhhhhhhhhh")
        res.send(users)
    }else{
        res.send("User Not Exist")
    }
}