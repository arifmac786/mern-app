import express from "express"
const app = express()

app.get("/",(req,res)=>{
    res.send({
        name:"helo"
    })
})

export default app