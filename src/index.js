require("./database");

const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const session = require("express-session");
const bodyParser = require("body-parser");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { User, Chat } = require("./models");
const {API_PORT} = require('./config');
const bcrpyt = require('bcrypt')
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
const helmet = require('helmet')
const rateLimit = require('express-rate-limit');

const sessionMiddleware = session({
  secret: "halooo",
  resave: true,
  saveUninitialized: true,
});

app.use(sessionMiddleware);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.session());
app.use(express.static('public'))

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100,
});


passport.use(
  new LocalStrategy(async (username, password, done) => {
    let user = await User.findOne({username});
    
    if (user && bcrpyt.compareSync(password,user.password,10)) {
      console.log("authentication OK");
      return done(null, user);

    } else {
      console.log("wrong credentials");
      return done(null, false);
    }
  }),
);

passport.serializeUser((user, cb) => {
  console.log(`serializeUser ${user._id}`);
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  console.log(`deserializeUser ${user._id}`);
  cb(null, user);
});

function onlyForHandshake(middleware) {
  return (req, res, next) => {
    const isHandshake = req._query.sid === undefined;
    if (isHandshake) {
      middleware(req, res, next);
    } else {
      next();
    }
  };
}

io.engine.use(onlyForHandshake(sessionMiddleware));
io.engine.use(onlyForHandshake(passport.session()));
io.engine.use(
  onlyForHandshake((req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.writeHead(401);
      res.end();
    }
  }),
);

io.on("connection", (socket) => {
  const req = socket.request;

  socket.on('groupchat', async (message) => {
    if(!message){
      return;
    }
    let newMessage = new Chat({message,from:req.user._id});
    await newMessage.save();

//send the message to all connected users
    io.emit('groupchat', {message: newMessage.message, from:req.user.username, created_at: newMessage.created_at});
  });

  socket.on("whoami", (cb) => {
    cb(req.user.username);
  });
});


module.exports = io;

const routes = require('./routes');
app.use(routes, limiter)

httpServer.listen(API_PORT, () => {
  console.log(`application is running at: http://localhost:${API_PORT}`);
});