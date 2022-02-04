const Sequelize= require("sequelize");

const sequelize= new Sequelize("CRUD_WB","root_crud","RooT@123",{
     dialect:"mysql",
     host:"localhost",
     port:"3306",
});



module.exports= sequelize;

