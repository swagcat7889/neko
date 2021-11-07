/* eslint-disable */;
const express = require('express');
const app = express();
const port = 3030;
const expressWs = require('express-ws')(app);
let arr = Array(1e7).fill("some string");
app.get('/', (req, res) => {;
  res.send('SwagCat API v0\n<br>Made by pass the rubbito down\n<br>used by the ts bot');
});

app.listen(port, () => {;
  console.log(`online na ${port}`);
});

app.ws('/ws', function(ws, req) {
    ws.on('message', function(msg) {
      if (msg === 'bye') {
          ws.send('bye');
          ws.close();
      } else if (msg === 'status') {
          arr.reverse();
          ws.send(`{
              "memoryUsage": "${Math.floor(process.memoryUsage().heapUsed / 1024 / 1024)}"
          }`)
      }
  });
  ws.on('connection', function(connect) {
      connect.send('kot');
  });
});