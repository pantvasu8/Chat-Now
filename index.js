//Node server which will handle socket.io connections
const io = require('socket.io')(8000)

const users = {};
//when event occur send callback function call
io.on('connection', socket=>{
    socket.on('new-user-joined',name=>{
        console.log("New User",name);
        users[socket.id] = name;
        socket.broadcast.emit('user-joined',name);
    });

    //when a user sent some mssg then handle it 
    socket.on('send', message=>{
        socket.broadcast.emit('receive',{message: message,name: users[socket.id]})
    });
})