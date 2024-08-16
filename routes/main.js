const {Router}=require('express')
const router=Router()
const path=require('path')

const {expdata}=require('./users')
const { title } = require('process')
//const exdata=require('../user.json')

router.get('/',(req,res)=>{
   
    //res.sendFile(path.join(__dirname,'..','views','main.html'))
  res.render('main',{
    title:'Tasks list',
    users:expdata
  })
   
})
router.get('/task/:id',(req,res)=>{
   userID=parseInt(req.params.id)

   res.render('task-page',{
    title:`${userID}-task`,
    task:expdata[userID-1],
    
      }
  )
})

module.exports=router

