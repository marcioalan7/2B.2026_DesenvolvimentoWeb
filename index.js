const express = require('express');
const app = express();

app.get(
    '/',
    (req, res) => {
        res.send('Bem vindo ao sistema!')
    }
);

app.get(
    '/sobre',
    (req, res) => {
        res.send('Somos uma equipe de Desenvolvimento Web')
    }
);

app.get(
    '/contato',
        (req, res) => {
        res.json({"email": "contato@email.com",
                "telefone": "(81) 99999-9999"})
    }
);

app.get(
    '/erro',
        (req, res) => {
        res.status(404).send('Não Econtrado')
    }
);

app.get(
    '/inicio',
        (req, res) => {
        res.redirect('/')
    }
);

app.get(
    '/usuarios/:id',
        (req, res) => {
            const id = req.params.id;
         res.send(`Usúarios ${id}`)
    }
);

app.get(
    '/produtos/:nome',
        (req, res) => {
            const nomeProd = req.params.nome;
         res.send(`Produto enviado: ${nomeProd}`)
    }
);

app.get(
    '/filme/:id/:nome',
        (req, res) => {
            const idFilme = req.params.id;
            const nomeFilme = req.params.nome
         res.send(`Id do Filme: ${idFilme} - Nome do Filme: ${nomeFilme}`)
    }
);

app.listen(
    3000,
    () => {
        console.log('Servidor em execução!')
    }
);