// General Imports
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

// Router Imports
const authRouter = require('./RaM/auth/auth-router')
const friendsRouter = require('./RaM/friends/friends_router')
const listRouter = require('./RaM/lists/list-router')
const restricted = require('./RaM/auth/restricted')

// Server uses
const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/users', authRouter)
server.use('/api/friends',restricted, friendsRouter)
server.use('/api/lists', restricted, listRouter)

server.use('*', (req, res, next) => {
  next({status: 404, message: 'not found'})
})

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server
