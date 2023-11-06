const express = require('express')
const routes = require('./routes/index')

const app = express()
app.use('/', routes);

app.listen(3001, 'localhost', () => {
    console.log('server is listening on port 000')
})