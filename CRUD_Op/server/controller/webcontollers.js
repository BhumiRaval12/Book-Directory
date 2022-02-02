var bodyParser = require('body-parser');



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

app.post('/insert', urlencodedParser, function (req, res) {

     res.render('crud', {
          data:req.body
     });


});
          

         
     }