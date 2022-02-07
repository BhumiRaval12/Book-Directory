let express = require('express');
let dotenv = require('dotenv');
let bodyparser = require("body-parser");
let path = require('path');
const sequelize = require('./server/database/database');
const crs = require("./models/course");

const webController = require('./server/controller/webcontollers');
const Courses = require('./models/course');

let app = express();
let router = express();


dotenv.config({
     path: 'config.env'
})
const PORT = process.env.PORT || 8080

// webController(app);

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


// sequelize.sync().then(result => {
//      return crs.create({
//           Course_name: "NodeJS",
//           Course_Duration: 25,
//           Course_Fees: 25000
//      });
//      console.log(result);

// }).then(courses => {
//      console.log("First Course added:", courses);
// }).catch(err => {
//      console.log(err);
// });

const Routes = require("./server/routes/routes");;
app.use("/", Routes);

sequelize.sync().then(() => {
     app.listen(PORT, () => {
          console.log(`listening on: http://localhost:${PORT}`);
     });
});


// app.post('/insert', urlencodedParser, function (req, res) {

//      var crd = req.body;
//      sequelize.sync().then(result => {
//           console.log(result);
//           return crs.create({
//               Course_name: crd.name,
//                Course_Duration: crd.duration,
//                Course_Fees: crd.Fees,
//           }).then((courses) => {
//                console.log("courses added succesfully:", courses);
//           });


//      });



// });


// app.listen(PORT, () => {
//      console.log(`Server is running on http://localhost:${PORT}`)
// });