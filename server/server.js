const path = require('path')
const express = require('express')
const app = express() // create a instance of Express
const publicPath = path.join(__dirname, '..', 'public')
const port = process.env.PORT || 3000  // set port number from diploy service or just static 3000

app.use(express.static(publicPath))  // use this Express app as a middleware to handle requests from client - set public file as path -> this app use the files in the public file

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port, () => {
  console.log('server is up')
})
