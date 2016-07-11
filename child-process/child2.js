const cp = require('child_process');
const n = cp.fork(`${__dirname}/sub.js`);

n.on('message', (m) => {
    console.log('PARENT got message:', m);
});

n.send({
    hello: 'world',
});
