const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const checkAdmin = (req, res, next)=>{
    console.log("in first")
    if(req.query.admin === "true"){
        next()
    }else{
        res.status(400).send('should be admin')
    }
}

const sendResponse = (req, res) =>{
    res.status(200)
    res.json(req.query)
}

// add global middleware
// app.use(checkAdmin)

app.get('/', sendResponse)

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.post('/', (req, res)=>{
    console.log('req.body ->', req.body)
    res.json({text: req.body})
})
app.listen(5000)

