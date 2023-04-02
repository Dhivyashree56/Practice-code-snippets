// Write Javascript code here
const {fork} = require('child_process');

const child = fork(__dirname + '/sub.js');

child.on('message', function(m) {
console.log('Parent process received:', m);
});

child.send({ hello: 'from parent process' });

child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});