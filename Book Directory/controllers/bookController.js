const bodyParser = require("body-parser");
const bookdb = require("../Database/bookdb");
const bookData = require("../models/books");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  // add a new book
  addBook: async (req, res) => {
    try {
      const book_Directory = {
        name: req.body.name,
        author: req.body.author,
      };
      console.log(book_Directory);

      let addBook = await bookData.create(book_Directory);

      res.send(addBook);

      console.log(book_Directory);
    } catch (error) {
      return res.status(200).json({
        status: 200,
        data: "",
        error: "Missing Required fields",
      });
      //console.log(e.message);
    }
  },

  //retrieve all books by search
  getAll: async (req, res) => {
    try {
      let name = req.query.name;
      let author = req.query.author;
      let page = parseInt(req.query.page);
      let limit = parseInt(req.query.limit);

      if (!name & !author) {
        return res.status(200).json({
          status: 200,
          data: "",
          error: "Missing Required fields",
        });
      }

      let findBook = await bookData.findAndCountAll({
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
      });

      res.send(findBook);
    } catch (error) {
      return res.status(500).json({
        status: 500,
        data: "",
        error: "Unknown error",
      });
      //console.log(e.message);
    }
  },

  //get book by Id
  getById: async (req, res) => {
    try {
      let showBook = await bookData.findOne({ where: { id: req.params.id } });
      res.send(showBook);
    } catch (error) {
      return res.status(200).json({
        status: 200,
        data: "",
        error: "Missing Required fields",
      });
      //console.log(e.message);
    }
  },

  //update book by Id
  updateById: async (req, res) => {
    try {
      let UpdatedData = req.body;
      if (!UpdatedData.name || !UpdatedData.author) {
        return res.status(200).json({
          status: 200,
          data: "",
          error: "Missing Required fields",
        });
      }

      let updatebooks = await bookData.update(UpdatedData, {
        where: { id: req.params.id },
      });

      res.send(updatebooks);
    } catch (error) {
      return res.status(500).json({
        status: 500,
        data: "",
        error: "Unknown error",
      });
      //console.log(e.message);
    }
  },
};
