//regras de negocios
const database = require("../models")
const tabelaArtigos = database.artigos;


//cria um novo artigo
exports.create = (request, response) => {
    const artigo = {
        titulo: request.body.titulo,
        descricao: request.body.descricao,
        publicado: request.body.publicado
    };

    //a promise pode ser resolvida
    //ou ela pode ser rejeita (ex: ocorreu um erro ao tentar salvar)

    tabelaArtigos.create(artigo)
    .then(() => response.send("Artigo criado com sucesso"))
    .catch((error) => {
        console.log(error);
        response.status(500).send("Ocorreu um erro ao salvar o artigo");
    })
};