const express = require("express");
const router = express.Router();
const db = require("../../models/course");
const sequelize = require('../database/database');
let bodyparser = require("body-parser");

var urlencodedParser = bodyparser.urlencoded({
     extended: false
});



router.get('/', (req, res) => {

     return sequelize.sync().then(() => {

          return db.findAll({
               raw: true,
               //Other parameters
          })

     }).then(courses => {

          console.log(courses);
          res.render('crud', {
               courses: courses
          });
     }).catch((err) => {
          console.log(err);


     });

})


router.post('/insert', urlencodedParser, function (req, res) {

     var crd = req.body;
     sequelize.sync().then(result => {
          console.log(result);
          return db.create({
               Course_name: crd.name,
               Course_Duration: crd.duration,
               Course_Fees: crd.fees
          }).then((courses) => {
               console.log("courses added succesfully:", courses);
               res.redirect('/');
          });


     });




});

router.get('/form', (req, res) => {
     res.render('_form');
});

// get all 
router.get("/all", (req, res) => {
     db.Courses.findAll().then(cr => res.send(cr));
});

// get single id 
router.get("/find/:id", (req, res) => {
     db.Courses.findAll({
          where: {
               id: req.params.id
          }
     }).then(cr => res.send(cr));
});

// post new 
router.post("/new", (req, res) => {
     db.Courses.create({
          text: req.body.text
     }).then(submitedcr => res.send(submitedcr));
});

// delete 
router.delete("/delete/:id", (req, res) => {
     db.Courses.destroy({
          where: {
               id: req.params.id,
               res: redirect('/')

          }
     }).then(delcr => res.send(delcr));
});


// // edit 
// router.put("/edit", (req, res) => {
//      db.Courses.update({
//           text: req.body.text
//      }, {
//           where: {
//                id: req.body.id
//           }
//      }).then(() => res.send("success"));
// });


// router.delete = (req, res) => {
//      const id = req.params.id;

//      db.Courses.destroy({
//                where: {
//                     id: del - btn
//                }
//           })
//           .then(num => {
//                if (num == 1) {
//                     res.send({
//                          message: "deleted successfully!"
//                     });
//                }
//           })

// };



























module.exports = router;