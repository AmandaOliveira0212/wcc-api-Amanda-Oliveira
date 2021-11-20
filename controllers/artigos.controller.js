//regras de negocios
const { response } = require("express");
const { artigos } = require("../models");
const database = require("../models")
const tabelaArtigos = database.artigos;



//cria um novo artigo
exports.create = (request, response) => {
    const { titulo, descricao, publicado } = request.body; 
    const artigo = {
        titulo,
        descricao,
        publicado,
    };
 
    if (!artigo.titulo) {
        return response
        .status(400)
        .send("O artigo precisa conter ao menos o titulo definido");
    }

    //a promise pode ser resolvida
    //ou ela pode ser rejeita (ex: ocorreu um erro ao tentar salvar)
    tabelaArtigos //new create
        .create(artigo)
        .then(function () {
            response.send("Artigo criado com sucesso");
        })
        
        .catch(function (error) {
            response.status(500)
            .send("Ocorreu um erro ao salvar os artigos");
        });
};


exports.findAll = (request, response) => {
    tabelaArtigos.findAll()
        .then(function (data) {
            response.send(data);

        }).catch(function () {
            response.status(500)
            .send("Ocorreu um erro ao obter os artigos");
        });
}


exports.findByPk = (request, response) => {
    const idArtigo = request.query.id;
    tabelaArtigos.findByPk(idArtigo)
        .then(function (data) {
            if (data) {
                response.send(data);
            } else {
                response.status(404)
                .send("Não foi possível encontrar um id: " + idArtigo);
            }

        }).catch(function () {
            response.status(500)
            .send("Erro obtendo o id" + idArtigo);
            idArtigo
        });
}


exports.findOne = (request, response) => {
    const tituloArtigo = request.query.titulo;
    tabelaArtigos.findOne({ where: { titulo: tituloArtigo } })
        .then(function (data) {
            if (data) {
                response.send(data);
            } else {
                response.status(404)
                .send("Não foi possível encontrar o titul" + tituloArtigo);
            }

        }).catch(function () {
            response.status(500)
            .send("Erro obtendo o titulo: " + tituloArtigo);
            tituloArtigo
        });
}