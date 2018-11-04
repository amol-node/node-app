let express = require('express');
let app = express();
let morgan = require('morgan');
let bodyParser = require('body-parser');
let fs = require('fs');
let port = process.env.PORT || 3005;

var timeout = require('connect-timeout'); //express v4
let crawlRoute = require('./routes/crawl');
//parse application/json and look for raw text                                        
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));  

app.use(timeout(120000));
app.use(haltOnTimedout);

function haltOnTimedout(req, res, next){
  if (!req.timedout) next();
}

var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'})
  app.use(morgan('combined',  {"stream": accessLogStream}));
     
app.get("/", (req, res) => res.json({message: "Welcome to our Web Crawler!"}));
app.use("/api", crawlRoute);

app.listen(port);
console.log("Listening on port " + port);

module.exports = app; // for testing