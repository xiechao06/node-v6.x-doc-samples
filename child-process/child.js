process.on('message', (m, server) => {
  if (m === 'server') {
    server.on('connection', (socket) => {
      console.log('CHILD connected');
      socket.end('handled by child');
    });
  }
});
