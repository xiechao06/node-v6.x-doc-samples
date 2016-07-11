const spawn = require('child_process').spawn;
const grep = spawn('grep', ['ssh']);

grep.on('close', (code, signal) => {
    console.log(`child process terminated due to receipt of signal ${signal}`);
});

setTimeout(() => {
    grep.kill('SIGHUP');
}, 1000);
