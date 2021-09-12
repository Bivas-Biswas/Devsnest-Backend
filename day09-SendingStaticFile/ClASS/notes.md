```
    1.
    send json file
        res.sendFile(path.join(__dirname, './public/hello.json'),'test.json')
    
    download the file
        res.download(path.join(__dirname, './public/hello.json'),'test.json')

    2.
    send image file
        res.sendFile(path.join(__dirname,'./public/tree.webp'))
    download the file
        res.download(path.join(__dirname,'./public/tree.webp'), 'root.jpeg')

    3.
    dynamic file load
        i. add view folder absolute path, for access the file (bydefault the folder is views)
            app.set("views", path.join(__dirname, "views"))
        ii. set view engine
            app.set("view engine", "jade")
        ii. render value dynamically
            res.render('index', {tittle:'Expresss', ok:'hello'})

    4.
    cookie manngement
        syntax: res.cookie(name, value, fn)
            res
            .status(201)
            .cookie("toke", "test", {
                expires: new Date(Date.now() + 8 * 360000) // add expire date the cookie
            })
            .cookie("hello","hello")
            .redirect(301, "/admin")
```