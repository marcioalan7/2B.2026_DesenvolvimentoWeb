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
    '/erro',
        (req, res) => {
        res.status(404).send('Não Econtrado')
    }
);

app.get(
    '/erro',
        (req, res) => {
        res.status(404).send('Não Econtrado')
    }
);

app.get(
    '/erro',
        (req, res) => {
        res.status(404).send('Não Econtrado')
    }
);

app.get(
    '/erro',
        (req, res) => {
        res.status(404).send('Não Econtrado')
    }
);

app.get(
    '/erro',
        (req, res) => {
        res.status(404).send('Não Econtrado')
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

app.listen(
    3000,
    () => {
        console.log('Servidor em execução!')
    }
);