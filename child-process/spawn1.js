const spawn = require('child_process').spawn;
const ps = spawn('ps', ['ax']);
const cat = spawn('cat');

ps.stdout.on('data', (data) => {
  cat.stdin.write(data.toString());
});

ps.stderr.on('data', (data) => {
  console.error(`ps stderr: ${data}`);
});

ps.on('close', (code) => {
  if (code !== 0) {
    console.log(`ps process exited with code ${code}`);
  }
  cat.stdin.end();
});

cat.stdout.on('data', (data) => {
  console.log(`${data}`);
});

cat.stderr.on('data', (data) => {
  console.log(`cat stderr: ${data}`);
});

cat.on('close', (code) => {
  if (code !== 0) {
    console.log(`cat process exited with code ${code}`);
  }
});
