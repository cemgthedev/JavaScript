const express = require('express');

const app = express();

//middleware
app.use(express.json());

app.listen('8080');

let author = "Diego";

app.route('/').get((req, res) => res.send(author));

app.route('/').post((req, res) => {res.send(req.body)});

// body params
app.route('/').put((req, res) => {
    author = req.body.author; 
    res.send(author);
});

// route params
app.route('/:identificador').delete((req, res) => {
    res.send(req.params.identificador);
});

app.route('/identidade/:nome').get((req, res) => {
    res.send(req.params.nome);
});

// query params
// ex: localhost:3000?nome=Mayk&cidade=São Paulo
app.route('/').get((req, res) => {res.send(req.query.nome)})