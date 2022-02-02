var bodyParser = require('body-parser');



var urlencodedParser = bodyParser.urlencoded({
     extended: false
});
module.exports = function (app) {


          

          app.post('/_form', urlencodedParser, function (req, res) {

               data.push('index.js',{data:req.params.name});
               res.json(data);

          });
     }