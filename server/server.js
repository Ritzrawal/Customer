const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
mongoose.Promise=Promise
var dbUrl = 'mongodb://ritzrawal:ritzrawal123@ds261072.mlab.com:61072/customer';
Address = require('./models/Address');
mongoose.connect(dbUrl, { useNewUrlParser: true },(err) => {
    console.log('mongodb connection', err)
})
app.get('/', (req, res) => {
    res.send('Hello ');
});
app.get('/api/contact', function (req, res) {
    Address.getDetails(function (err, address) {

        if (err) {
            throw err;
        }
        app.set('json spaces', 2);
        res.json(address);
    });
});

app.post('/api/contact', function (req, res) {
    var address = req.body;
    Address.addDetails(address, function (err, address) {
        if (err) {
            throw err;
        }
        app.set('json spaces', 2);
        res.json(address);
    });
});



app.put('/api/contact/:_id', function (req, res) {
    var _id = req.params._id;
    var address = req.body;
    Address.updateDetails(_id, address, {}, function (err, address) {
        if (err) {
            throw err;
        }
        app.set('json spaces', 2);
        res.json(address);
    });
});
app.listen(8000);
console.log("Running");