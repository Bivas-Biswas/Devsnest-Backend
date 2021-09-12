const express = require('express')
const app = express()
const path = require('path')

app.use('/', (req, res)=>{
    res
    .status(201)
    .cookie("toke", "test", {
        expires: new Date(Date.now() + 8 * 360000)
    })
    .cookie("hello","hello")
    .redirect(301, "/admin")
})
app.listen(5000)