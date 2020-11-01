const app = require("express")();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

const hostName = "localhost";
const port = "3000";

app.get("/", (req,res)=>{
    res.sendFile(__dirname +'/index.html');
});

//For making connection to the socket
io.on('connection', (socket)=>{
    socket.on('chat message', (msg)=>{
        console.log('meaasge '+ msg);
    })
    console.log("a user is connected");
    socket.on('disconnect', ()=>{
        console.log("User is disconnected");
    });
});


http.listen(port , ()=>{
    console.log(`Server is up at http://${hostName}:${port}`);
});
