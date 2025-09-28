const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Configure CORS to allow requests from specific origins
app.use(cors({ origin: ['https://example.com', 'https://anotherdomain.com'] }));

app.get('/', (req, res) => {
  res.send('Welcome to Team Syncer API!');
});

io.on('connection', (socket) => {  // Fixing typo from 'ii' to 'io'
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});