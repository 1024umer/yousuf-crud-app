const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/User')
const SignUpModel = require('./models/SignUp')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://umer_first1:0229033goodmen@cluster0.bagpgxz.mongodb.net/')
app.post('/create-user',(req,res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
app.put('/update-user/:id',(req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age,
        city:req.body.city,
        country:req.body.country,
    })
    .then(users => res.json(users))
    .catch(error => console.log(error))
});
app.delete('/delete-user/:id',(req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(users => res.json(users))
    .catch(error => console.log(error))
})
app.get('/',(req,res) => {
    UserModel.find({})
    .then(users => res.json(users))
    .catch(error => console.log(error))
})
app.get('/get-user/:id',(req,res)=>{
    const id = req.params.id;
    UserModel.findById(id)
    .then(user=> res.json(user))
    .catch(error => console.log(error))
})

app.post('/signup',(req,res)=>{
    SignUpModel.create(req.body)
    .then(users=>res.json(users))
    .catch(error=>res.json(error))
});
app.post('/login',(req,res)=>{
  const {email,password} = req.body;
  SignUpModel.findOne({email:email})
  .then(user => {
    if(user){
        if(user.password === password){
            res.json('Success')
        }else{
            res.json('Wrong password')
        }
    }else{
        res.json('User Does Not Exist')
    }
  })  
})
app.listen(3001,()=>{
    console.log('Server is running on port 3001')
})