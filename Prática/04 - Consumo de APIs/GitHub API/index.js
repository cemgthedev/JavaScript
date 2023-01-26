const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

app.listen('5000');

app.route('/').get(async (req, res) => {
    try {
        const user = await axios.get(`https://api.github.com/users/cemgthedev`);
        const data = user.data;

        const repos = await axios.get(data.repos_url);
        const data_repos = repos.data;

        const followers = await axios.get(data.followers_url);
        const data_followers = followers.data;

        res.send(`
            <h1>Login: ${data.login}</h1>
            <img src=${data.avatar_url}/>
            <h2>${data.name}</h2>
            <h2>Informações do Usuário</h2>
            <ul>
                <li>Número de Repositórios Públicos: ${data.public_repos}</li>
                <li>Número de Seguidores: ${data.followers}</li>
                <li>Número de Seguidos: ${data.following}</li>
                <li>Data de Criação do Perfil: ${data.created_at}</li>
                <li>Data da Última Atualização: ${data.updated_at}</li>
            </ul>
            <h2>Repositórios</h2>
            ${data_repos.map(
                repo => 
                `<h3><a href=${repo.html_url}>Nome: ${repo.name}</a></h3>
                 <h3>Informações do Repositório</h3>
                 <ul>
                     <li>Data de Criação do Repositório: ${repo.created_at}</li>
                     <li>Data da Última Atualização: ${repo.updated_at}</li>
                     <li>Número de Estrelas: ${repo.stargazers_count}</li>
                     <li>Número de Visualizações: ${repo.watchers}</li>
                     <li>Linguagem: ${repo.language}</li>
                     <li>Tamanho do Projeto em bytes: ${repo.size}</li>
                 </ul>
                `
            )}
            <h2>Seguidores</h2>
            ${data_followers.map(
                follower => 
                `<img src=${follower.avatar_url}/>
                 <h3><a href=${follower.html_url}>Nome de Usuário: ${follower.login}</a></h3>
                `
            )}
        `);
    } catch(e) {
        res.send(`Error: ${e}`);
    }
});