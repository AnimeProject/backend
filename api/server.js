// General Imports
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const server = express()

// Router Imports
const authRouter = require('./RaM/auth/auth-router')

// Server uses
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/auth', authRouter)

// server.use('*', (req, res, next) => {
//   next({status: 404, message: 'not found'})
// })

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server
