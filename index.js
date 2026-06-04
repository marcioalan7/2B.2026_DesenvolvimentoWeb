const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs.engine({ defaultLayout: false }));
app.set("view engine", "handlebars");

app.get("/sobre", (req, res) => {
  res.send("Somos uma equipe de Desenvolvimento Web");
});

app.get("/contato", (req, res) => {
  res.json({
    email: "contato@email.com",
    telefone: "(81) 99999-9999",
  });
});

app.get("/erro", (req, res) => {
  res.status(404).send("Página não encontrada");
});

app.get("/inicio", (req, res) => {
  res.redirect("/");
});

app.get("/usuarios/:id", (req, res) => {
  const id = req.params.id;

  res.send(`Usuário ${id}`);
});

app.get("/produtos/:nome", (req, res) => {
  const nomeProd = req.params.nome;

  res.send(`Produto enviado: ${nomeProd}`);
});

app.get("/filmes/:id/:nome", (req, res) => {
  const idFilme = req.params.id;
  const nomeFilme = req.params.nome;

  res.send(`Id do Filme: ${idFilme} - Nome do Filme: ${nomeFilme}`);
});

app.get("/buscar", (req, res) => {
  const { nome } = req.query;

  res.send(`Buscando por: ${nome}`);
});

app.get("/produtos", (req, res) => {
  const { categoria, pagina } = req.query;

  res.send(`Buscando por: ${categoria} - Página ${pagina}`);
});

app.get("/usuario", (req, res) => {
  const { idade } = req.query;

  res.send(`Filtrando usuários com idade: ${idade}`);
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/perfil", (req, res) => {
  res.render("perfil", {
    nome: "Adryan",
    idade: 17,
  });
});

const filmes = [
  {
    nome: "Matrix",
    ano: 1999,
  },
  {
    nome: "Interestelar",
    ano: 2014,
  },
  {
    nome: "Avatar",
    ano: 2009,
  },
];

app.get("/filmes", (req, res) => {
  res.render("filmes", {
    filmes,
    logado: true,
    admin: false,
  });
});

const videos = [
  {
    titulo: "Video 1",
    criador: "Marcio",
    descricao: "Curso de Express.js",
    visualizacoes: 1000,
    curtidas: 500,
    hashtag: "#nodejs",
    urlVideo: "https://youtube.com",
    thumbnail:
      "https://img.magnific.com/fotos-gratis/composicao-abstrata-de-luz-ultravioleta-uv_23-2149243965.jpg?semt=ais_hybrid&w=740&q=80",
  },
];

app.get("/", (req, res) => {
  res.render("inicio");
});

app.get("/videos", (req, res) => {
  res.render("videos", { videos });
});

app.get("/videos/cadastrar", (req, res) => {
  res.render("cadastrar");
});

app.post("/videos", (req, res) => {
  const {
    titulo,
    criador,
    descricao,
    visualizacoes,
    curtidas,
    hashtag,
    urlVideo,
    thumbnail,
  } = req.body;

  const novoVideo = {
    titulo,
    criador,
    descricao,
    visualizacoes: parseInt(visualizacoes),
    curtidas: parseInt(curtidas),
    hashtag,
    urlVideo,
    thumbnail,
  };

  videos.push(novoVideo);

  res.redirect("/videos");
});

app.listen(3000, () => {
  console.log("Servidor em execução!");
});
