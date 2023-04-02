const {execFile} = require ('child_process');
execFile('./inputfile1.txt',(stderr,stdout) =>{
    if(stderr){
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
})