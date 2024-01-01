const express=require('express');
const http=require('http');
const cors =require('cors');
const SocketIO= require('socket.io');
 

const app =express();
const users=[{}];
app.use(cors());
 const port= 5000 || process.env.PORT ;
 app.get('/',(req,res)=>{
    res.send('Hello bhai log!')
 }) 
  const server =http.createServer(app);
  const io=SocketIO(server);
  io.on('connection',(socket)=>{ 
    console.log('New Connection !');
    socket.on('joined',({user})=>{
      users[socket.id]=user;
      console.log(`${user} has joined`);
      socket.broadcast.emit('UserJoined',{user:'Admin',message:`${users[socket.id]} has joined `})
      socket.emit('Welcome',{user:'Admin',message:`'Welcome to the chat':-${users[socket.id]}`})
    })
    socket.on('message',({message,id})=>{
      io.emit('sendMessage',{user:users[id],message,id })
    })
    socket.on('disconnect',()=>{
      console.log(`${users[socket.id]} has left chat`);
      socket.broadcast.emit('leave',{user:'Admin',message:`${users[socket.id]} has left chat`}) 
    })
  })
   server.listen(port,()=>{
    console.log(`Server is connected on http://localhost:${port}`);
   })