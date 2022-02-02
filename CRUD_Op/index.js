let express = require('express');
let dotenv = require('dotenv');
let morgan = require('morgan');
let bodyparser = require("body-parser");
let path = require('path');

const webController = require('./server/controller/webcontollers');

let app = express();

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080

// log requests
app.use(morgan('tiny'));


webController(app);

// parse request to body-parser
app.use(bodyparser.urlencoded({
     extended: true
}))

// set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))






app.listen(PORT, () => {console.log(`Server is running on http://localhost:${PORT}`)});
