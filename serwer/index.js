const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const lista = [
    {nazwa:""}
]
app.get("/",function(req,res){
    res.json(lista)
})
app.get("/gettask/:input",function(req,res){
    const input = req.params.input
    const tmp_obj = {nazwa:input}
    lista.push(tmp_obj)
    res.send("wysłano")
})
app.listen(3000)