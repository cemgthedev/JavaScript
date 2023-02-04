const axios = require('axios');
const express = require('express');

const app = express();

app.use(express.json());

app.listen('3000');
console.log('http://localhost:3000/');

app.route('/').get(async (req, res) => {
    try {
        const resolve = await axios.get('https://fakestoreapi.com/products');
        const products = resolve.data;
        res.send(`
            ${products.map(product => `
                <h1>Categoria: ${ product.category }</h1>
                <h1>Título: ${ product.title }</h1>
                <img height='150px' width='150px' src=${ product.image } alt=''/>
                <h2>Preço: ${ product.price }</h2>
                <p>Descrição: ${ product.description }</p>
                <p>Avaliação: ${ product.rating.rate } estrelas ${product.rating.count} avaliações</p>
            `)}
        `);
    } catch(error) {
        console.error(error);
    }
});