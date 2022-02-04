const express = require("express");
const router = express.Router();
const db = require("./models/course");

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
               id: req.params.id
          }
     }).then(() => res.send("success"));
});

// edit 
router.put("/edit", (req, res) => {
     db.Courses.update({
          text: req.body.text
     }, {
          where: {
               id: req.body.id
          }
     }).then(() => res.send("success"));
});

module.exports = router;