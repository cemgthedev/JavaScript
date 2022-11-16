const express = require('express');

const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    const items = [
        {
            title: 'D',
            message: 'Desenvolver aplicações'
        },
        {
            title: 'E',
            message: 'EJS usa JavaScript'
        },
        {
            title: 'M',
            message: 'Muito fácil de usar'
        },
        {
            title: 'A',
            message: 'Amor'
        }
    ];

    res.render("pages/index", {qualitys: items,});
})

app.get("/sobre", function (req, res) {
    res.render("pages/about");
})

app.listen(8080);