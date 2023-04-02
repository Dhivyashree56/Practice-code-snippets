//Sync func
var fs = require("fs");
var filedata = fs.readFileSync('inputfile1.txt');
console.log(filedata.toString());
console.log("End of Program execution");

//Async func
var fs = require("fs");    
fs.readFile('inputfile1.txt', function (ferr, filedata) {  
    if (ferr) return console.error(ferr);  
    console.log(filedata.toString());  
}); 
console.log("End of Program execution"); 