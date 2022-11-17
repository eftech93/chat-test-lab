const { PORT } = require('./constants');
const WebSocketServer = require('ws');
 
const wss = new WebSocketServer.Server({ port: PORT })

var sentMsg = ["Welcome to chat"]

var webSockets = []
wss.on("connection", ws => {

    webSockets.push(ws);

    sentMsg.forEach(msg => {
        ws.send(msg);
    });

    console.log("new client connected");
    // sending message
    ws.on("message", data => {
        console.log(`${data}`)
        sentMsg.push(`${data}`);
        webSockets.forEach(webSocket => {
            try{
                webSocket.send(`${data}`);
            }catch(e){
            }
        });
        console.log(`Client has sent us: ${data}`)
    });
    // handling what to do when clients disconnects from server
    ws.on("close", () => {
        console.log("the client has disconnected");
    });
    // handling client connection error
    ws.onerror = function () {
        console.log("Some Error occurred")
    }
});
console.log(`The WebSocket server is running on port: ${PORT}`);