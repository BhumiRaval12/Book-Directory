const Sequelize = require("sequelize");

const sequelize = require("../Database/bookdb");

const Book = sequelize.define("bookDirectories", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  author: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  createdAt: {
    type: "TIMESTAMP",
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    allowNull: false,
  },
  updatedAt: {
    type: "TIMESTAMP",
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    allowNull: false,
  },
});

module.exports = Book;
