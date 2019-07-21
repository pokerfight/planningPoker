const app = require("./backend/app");
const debug = require("debug")("node-angular");
const http = require("http");

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);


//Communication between server and clients in real time
var io = require('socket.io').listen(server);

io.on('connection',(socket)=>{

    console.log('01 - new connection made. (app.js)');

    // Essa função é chamada 
    socket.on('join', function(data){
      //joining
      // socket.join(data.room);

      console.log('O participante: ' + data.name + ' do squad: ' + data.squadName )

      // console.log(data.user + 'joined the room : ' + data.room);

      //socket.broadcast.to(data.room).emit('new user joined', {user:data.user, message:'has joined this room.'});
    
      io.emit('new user joined', {participante: data.name + ' - ' + data.squadName, message:'has joined this room.'});
    });


    socket.on('leave', function(data){
    
      console.log(data.user + 'left the room : ' + data.room);

      socket.broadcast.to(data.room).emit('left room', {user:data.user, message:'has left this room.'});

      socket.leave(data.room);
    });

    socket.on('message',function(data){

      io.in(data.room).emit('new message', {user:data.user, message:data.message});
    })
});

server.on("error", onError);
server.on("listening", onListening);
server.listen(port);
