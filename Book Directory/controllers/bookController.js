const bodyParser = require("body-parser");
const bookdb = require("../Database/bookdb");
const bookData = require("../models/books");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  // add a new book
  addBook: (req, res) => {
    const book_Directory = {
      name: req.body.name,
      author: req.body.author,
    };
    console.log(book_Directory);

    bookData
      .create(book_Directory)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating .",
        });
      });
    console.log(book_Directory);
  },

  //retrieve all books by search
  getAll: (req, res) => {
    let name = req.query.name;
    let author = req.query.author;
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    bookData
      .findAndCountAll({
        limit: limit,
        offset: 0,
        page: page,
        where: {
          [Op.or]: [
            {
              name: {
                [Op.like]: "%" + name + "%",
              },
            },
            {
              author: {
                [Op.like]: "%" + author + "%",
              },
            },
          ],
        },
      })
      .then((data) => {
        res.send(data);
      });
  },

  //get book by Id
  getById: (req, res) => {
    bookData
      .findOne({ where: { id: req.params.id } })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while fetching .",
        });
      });
  },

  //update book by Id
  updateById: (req, res) => {
    var UpdatedData = req.body;

    bookData
      .update(UpdatedData, { where: { id: req.params.id } })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "some error occured while updating",
        });
      });
  },
};
