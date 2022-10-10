# Chat-Now
Web sockets solves the big problem of http response ->one way connection client request server response never like server request or push some update
Server can also push update to client http protocol -> not such a case where server give connection to client 
one way is there to solve this problem ->Http long Polling
other way web socket , two way connection like http jttps we have ws and wss web socket secured protocol
we will implement this using socket.IO a javascript library to initiate real time communication two way.
Node server working in socket.IO if a user harry came to join socketIO server then the server will provide a notification to all it's users that a user named harry has arrived Other method to do this communication is using AJAX
AJAX - server stores in database that new user entered then read request to read from database and hence a lot of http requests hence time consuming HTTP me user asks the server whether this is update or not but in SOcket.IO it's automatic
two servers client server and node server
npm init to create package.json file
npm i socket.io to load package-lock.json and node_modules folder


difficulty-> deprecated variable name in client.js and index.js common in both 
-> user and users problem in index.js
