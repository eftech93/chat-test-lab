const {WebSocket} = require('ws');
const {WS_DOMAIN, MESSAGE_DELAY} = require('./constants');

console.log(WS_DOMAIN, MESSAGE_DELAY);

const ws = new WebSocket(`ws://${WS_DOMAIN}/websocket`);
const delay = parseInt(MESSAGE_DELAY);
const items = ["hola mundo", "como estas", "bien y tu", "que haces", "nada y tu"];

function sendMessage(){
    var item = items[Math.floor(Math.random()*items.length)];
    ws.send(item);
    setTimeout(sendMessage, delay * 10); //delay is in secs 0.01 seg
}

ws.on('open', function open() {
    sendMessage()    ;
});

ws.on('message', function message(data) {
  console.log('received: %s', data);
});