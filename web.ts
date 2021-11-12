/* eslint-disable */
const express = require(`express`);
const app = express();
const port = 6969
const fs = require(`fs`);
const axios = require('axios').default;
let neko = new Array();
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function get() {
  return await axios.get('https://nekos.life/api/v2/img/neko');
}
get().then(function(reply) {
  if (!neko.includes(reply)) neko.push(reply.data.url);
});
app.get('/', async function (req, res) {
  process.stdout.write('/ fetch!\n');
  res.send(`${req.ip}`);
});
app.get('/neko', async function (req, res) {
  process.stdout.write(`/neko fetch! ip: ${req.ip}\n`);
  get().then(function(reply) {
    if (!neko.includes(reply)) neko.push(reply.data.url);
  });
  res.send(neko[Math.floor(Math.random() * neko.length)]);
});
app.get(`/ping`, async function (req, res) {
  process.stdout.write(`/ping fetch! ip: ${req.ip}\n`);
  res.send(`Pong!`);
});
app.get('*', async function (req, res) {
  process.stdout.write(`404 fetch ip: ${req.ip}\n`);
  res.send('404 pheasant not found');
});
app.listen(port, () => console.log(`SwagCat api ready at http://0.0.0.0:${port}`));
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');
axios.get('http://localhost:6969/neko');