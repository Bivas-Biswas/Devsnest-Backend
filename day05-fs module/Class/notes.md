## Create
    Directory
```
    fs.mkdirSync("test1")
```
    File
```
    fs.writeFileSync("test1/hello.txt", "hello world", function (err){
        if(err){
            console.log(err)
        }
    })

    Paramaters :
    path- location of new file
    data - file data
    callback function - error function 
```

## Read File
```
    fs.readFileSync("test1/hello.txt")
    output:
        <Buffer 68 65 6c 6c 6f 20 77 6f 72 72 6c 64>
        // why Buffer mode: if file size is very big,
        there is a performance problem, so node divied it
        small chunk files
    
    fs.readFileSync("test1/hello.txt", "utf-8")
    output:
        'hello worrld'
    parameter:
        file name, encoding format
```
[About Buffer](https://nodejs.org/en/knowledge/advanced/buffers/how-to-use-buffers/)

## Rename 
    Dictory
```
    fs.renameSync("test1", "test1")
```
    File
```
    fs.renameSync("test1/hello.txt", "test1/hello2.txt")
```

## Delete
    File
```
    fs.unlinkSync("test2/hello2.txt")
```
    Dictory
```
    fs.unlinkSync("test2/hello2.txt")
```
## Cli Method: 
How node js run in cli :
    REPL method
        R - Read
        E - Excute
        P - Print
        L - Loop
Problems in cli:
    1. we don't work multiple file

## Work with multiple files
    1. write the whole code in a js file
    2. and run it node filename
