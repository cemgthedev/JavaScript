const express = require('express');
const axios = require('axios');

const app = express();

app.listen('3000');

app.route('/').get((req, res) => {
    res.send(
        `<h1>Endpoints</h1>
        <ul>
            <li>/img</li>
            <li>/baka</li>
            <li>/8ball</li>
            <li>/dice</li>
        </ul>`);
});

app.route('/:endpoint').get(async (req, res) => {
    try {
        const response = await axios.get(`https://api.catboys.com/${req.params.endpoint}`);
        console.log(response.data);
        res.send(
            `<h1>Random Image</h1>
            <img src='${response.data.url}'/>
            `
        );
    } catch(e) {
        res.send(e);
    }
});