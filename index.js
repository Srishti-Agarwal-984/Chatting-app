
const express = require('express')
const app=express();
const http = require('http');
const server = http.createServer(app)// accepts request listner
const path = require('path');
const socketio = require('socket.io');
const io = socketio(server); // object



const users = {};



app.use('/', express.static(path.join(__dirname,'public')))

// server par on laga diya hai abb koi bhi message aagaye toh woh accept kar laga

io.on('connection', (socket)=>{ 
    console.log(`connection established ${socket.id}`);
    socket.on('send-msg',(data)=>{
        console.log(data.msg)
        // socket.emit('recieve-msg',{
        io.emit('recieve-msg',{
            msg:data.msg,
            id:socket.id,
            username:users[socket.id]
        })
    })

    socket.on('login', (data)=>{
        console.log(data);
        users[socket.id]=data.username;// mapping socket id with user id
    })

})// send-msg kuch bhi hosakta hai jo emit mei likha hai vahi hoga script.js mei likha hai




const port = process.env.PORT || 3000

server.listen(port,()=>{
    console.log("connected to server");
   

})













