// var fs = require("fs")
// fs.mkdirSync("test1")
// fs.writeFileSync("test1/hello.txt", "hello world", function (err){
//     if(err){
//         console.log(err)
//     }
// })

var test = require("./require_test")

var obj = new test()
var return_value = obj.print()
console.log(return_value);