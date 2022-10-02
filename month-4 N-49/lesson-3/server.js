const express = require('express')
const app = express()

app.length('/user', (req, res) => {
  res.send('OK')
})

app.listen(9090, console.log(9090))