const {Router}=require('express')
const router=Router()
const path=require('path')

const {expdata}=require('./users')
const { title } = require('process')


router.get('/',(req,res)=>{
   
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

