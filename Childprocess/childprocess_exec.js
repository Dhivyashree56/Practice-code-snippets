const {exec}=require('child_process');
exec('dir',(stderr,stdout)=>{
    if(stderr){
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
