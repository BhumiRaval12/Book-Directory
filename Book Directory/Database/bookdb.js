const Sequelize = require('sequelize');

const sequelize = new Sequelize('bookDirectory','ztlab02','ztlab02',{
    dialect:"mysql",
    host:'localhost',
    port:3306
});

module.exports =  sequelize;
