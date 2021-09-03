var fs = require("fs");

var myArgs = process.argv.slice(2);
console.log("Arguments : ", myArgs);

switch (myArgs[0]) {
  case "--create-dir":
    fs.mkdirSync(myArgs[1]);
    break;

  case "--create-file":
    fs.writeFileSync(myArgs[1], myArgs[2], function (err) {
      if (err) {
        console.log(err);
      }
    });
    break;

  case "--read-file":
    fs.readFileSync(myArgs[1], myArgs[2]);
    break;

  case "--rename-file":
    fs.renameSync(myArgs[1], myArgs[2]);
    break;
    
  case "--delete-dir":
    fs.rmdirSync(myArgs[1]);
    break;

  case "--delete-file":
    fs.unlinkSync(myArgs[1]);
    break;

  default:
    console.log("check the input !!");
}
