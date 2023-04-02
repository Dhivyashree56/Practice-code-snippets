const process = require('process');
console.log(process.cwd());
console.log(process.env);
console.log(process.hrtime());
console.log(process.memoryUsage.rss());
console.log(process.pid);
process.nextTick(()=>{
    console.log('process.nextTick');
});
console.log(process.report);
console.log(process.versions);