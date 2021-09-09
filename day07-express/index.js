const express = require('express')
const app = express()

// CRUD => POST, GET, PUT, DELETE
// const slash = (req, res)=>{
//     // res.send({a: 1})
//     res.json()
// }

// app.get('/',slash)
// app.post('/', slash)
// app.put('/', slash)
// app.delete('/', slash)
app.get('/products',(req, res)=>{
    // res.send({a: 1})
    // res.sendStatus(500)
    // res.json({a:1})

    // localhost:5000/products/?limit=50&q=somme // quryparmas
    res.send(req.query)
    // ouput:
    // {
    //     "limit": "50",
    //     "q": "somme"
    // }

})

app.get('/ab?cd', (req, res)=>{
    //url : ab ? cd == abc =abcd
    // ab+cd = abbbbbbbbbbcd
    // ab*cd = abRANDOMcd
    // ab(cd)?e =abcde == abe

    // also use regdx

    //user/:userId/books/:bookID == :dynamicvalue
    //let params = req.params

    res.send('abcd')
})

app.listen(5000)

