let express = require('express')
let states_api = require('./routes/states')
let path = require('path')


let app = express()

let vueAppPath = path.join(__dirname, 'client', 'dist')
app.use(express.static(vueAppPath))         // Requests to the application doesn't specify a particular path, returns/serve files is the dist directory/ index.js is default file returned

app.use(express.json())

app.use('/api', states_api)

app.use( function(req, res, next){
    res.status(404).send('Not found')
})

app.use(function(err, req, res, next){
    console.log(err)
    res.status(500).send('Server error')
})

let server = app.listen(process.env.PORT || 3000, function() {                  // Looks for PORT to run in, if there is not one- runs on PORT 3000
    console.log('server running on port', server.address().port)
})