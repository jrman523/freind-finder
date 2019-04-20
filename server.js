const keys = require('./keys');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 8080;

var jsonParser = bodyParser.json();


var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json({ type: 'application/*+json' }));

app.use(bodyParser.json({ type: 'application/vmd.custom-type' }));

app.use(bodyParser.json({ type: 'text/html' }));

app.listen(PORT, function () {
    console.log(`App listening on PORT: ${PORT}`);
});