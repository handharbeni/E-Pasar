var compression = require('compression')
var helmet = require('helmet')
var config = require('./tools/config')
var cors = require('cors')
var express = require('express'),
    app = express(),
    port = process.env.PORT || config.server_port,
    bodyParser = require('body-parser')
var path = require('path')
var session = require('express-session')
const redis = require('redis')
var RedisStore = require('connect-redis').default
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'localhost')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')

  next()
}
app.use(allowCrossDomain)
app.use(express.static('public'))
app.use(compression())
app.use(helmet())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'views')))
app.set('trust proxy',1)

const redisClient  = redis.createClient({
    socket: {
      host: '66.96.229.251',
      port: 20901
    }
});
redisClient.connect();

let redisStore = new RedisStore({
  client: redisClient,
  prefix: "e-pasar:"
})
app.use(session({
  store: redisStore,
  secret: 'epasarweb',
  resave: true,
  saveUninitialized: true
}))
app.locals.baseURL = config.server_schema+""+config.server+":"+config.server_port
/******************************************/
var routes = require('./modules/routes/routes')
routes(app)
app.listen(port, function() {
    console.log('Express server listening on '+ config.server +':port ' + port)
})
