const socket = io('http://localhost:8000');
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector('.container');

//append function
const append = (message,position)=>{
       const messageElement = document.createElement('div');
       messageElement.innerText = message;
       messageElement.classList.add('message');
       messageElement.classList.add(position);
       messageContainer.append(messageElement);
}

form.addEventListener('submit',(e)=>{
        e.preventDefault();
        const message = messageInput.ariaValueMax;
        append(`You: ${message}`, 'right');
        socket.emit('send', message);
        messageInput.value =''; //to make it blank again input bar
})

//I will emit an event like alert box
const name = prompt('Enter your name to join');
socket.emit('new-user-joined',name);

//listen to user joined event
socket.on('user-joined', name=>{
      append(`${name} joined the chat`, 'right');
})

//message transfer event


