const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')

router.get('/', (req, res, next) =>{
    res.sendFile(path.join(__dirname, "../public/html/index.html"))
})

router.get('/video', (req, res)=>{
    const range = req.headers.range
    if(!range){
        res.status(400).send("Range is Required")
    }
    const videoPath = path.join(__dirname, '../public/videos/test.mp4')
    const videoSize = fs.statSync(videoPath).size
    const CHUNK_SIZE = 10 ** 6
    const start = Number(range.replace(/\D/g, ""))
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1)
    const contentLength = end - start + 1
    
    const headers ={
        "Content-Range" :`bytes ${start}-${end}/${videoSize}`,
        "Accept-Range": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4"
    }
    res.writeHead(206, headers)

    const videoStream = fs.createReadStream(videoPath, {start, end})

    videoStream.pipe(res)
})

module.exports = router

