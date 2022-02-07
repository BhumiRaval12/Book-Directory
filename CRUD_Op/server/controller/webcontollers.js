var bodyParser = require('body-parser');
const db = require("../../models/course");
const sequelize = require('../database/database');


var urlencodedParser = bodyParser.urlencoded({
     extended: false
});
module.exports = function (app) {

     app.get('/', (req, res) => {
          res.render('crud');
     });

     app.get('/form', (req, res) => {
          res.render('_form');
     });

     app.get("/", function (req, res) {
          res.render("editform");
     })










}