var app = require('express')();
var bodyParser = require('body-parser');
var multer = require('multer');
var mv=require('mv');


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data

app.post('/upload', function(req, res) {
        console.log(req.files.fileUpload);
        var tempPath = req.files.fileUpload[0].path;
        var filename = req.files.fileUpload[0].name;

        mv(tempPath, filename, function(err) {
            console.log(err);
            if (err){
                res.send(500);
            }else{
                res.send(200);
            }
        });
});
app.listen(5544);
