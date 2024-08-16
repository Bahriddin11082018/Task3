const express=require('express')
const path=require('path')
const app=express()

app.set('view engine', 'ejs')
app.set('views','views')
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))



const userroutes=require('./routes/users')
const mainroutes=require('./routes/main')
app.use(userroutes.router)
app.use(mainroutes)

app.use((req,res)=>{
  //  res.status(404).sendFile(path.join(__dirname,'views', '404.html'))
  res.status(404).render('404',{title:'Page Not found'})
})

const PORT=process.env.PORT||2000

app.listen(PORT,()=>{
    console.log('work')
})