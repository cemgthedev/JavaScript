const express = require('express');

const app = express();

//middleware
app.use(express.json());

app.listen('8080');

let author = "Diego";

app.route('/').get((req, res) => res.send(author));

app.route('/').post((req, res) => {res.send(req.body)});

app.route('/').put((req, res) => {
    author = req.body.author;
    res.send(author);
});

app.route('/:identificador').delete((req, res) => {
    res.send(req.params.identificador);
});