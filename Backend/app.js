require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const { postOwnerDetailsRouter, postLoginRouter, isLoggedRouter, postLogOutRouter } = require('./Routers/Busness.Router');
const DB_URL = process.env.DB_URL;
const MongoDBStore = require("connect-mongodb-session")(session);
const store = new MongoDBStore({
  uri: DB_URL,
  collections: "session"
})
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  name: "localconnect.sid",
  secret: "HVC",
  resave: false,
  saveUninitialized: false,
  store: store,
  cookie: {
    httpOnly: true,
    secure: false,          // false because you're using http://
    sameSite: "lax",        // ✅ works well on same-network, avoids "None" issue
    maxAge: 1000 * 60 * 60 * 5
  }
}))
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))
app.use('/signup', postOwnerDetailsRouter)
app.use('/login', postLoginRouter)
app.use('/islogged', isLoggedRouter)
app.use('/logout', postLogOutRouter);
PORT = 3000
mongoose.connect(DB_URL).then(() => {
  console.log("mongoose connected")
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
  })
})
