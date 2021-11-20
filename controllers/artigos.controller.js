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


exports.findAllActive = (request, response) => {
    tabelaArtigos.findAll( { where: { publicado: true} })
        .then(data => {
            response.send(data);

        }).catch(function () {
            response.status(500)
            .send("Ocorreu um erro ao obter os artigos ativos");
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


    exports.uptade = (request, response) => {
        const {id: idArtigo } = request.params;
        const updates = request.body;
        const query = { where: { id: idArtigo } }

        if(!idArtigo) {
            return response.status(400)
            .send("Nãofoi possível atualizar o ID")
        }

        
exports.updateMany = (request, response) => {
    const { boby: updates } = request;
    const query = {
        returning: true,
        where: { descricao: "descricao do artigo" },
    };
}

        tabelaArtigos.update(updates, query)
        .then(function(data) {
            const linhasAtualizadas = data[0];

            if (linhasAtualizadas === 0) {
            response.status(404)
            .send("Não foi possivel atualizar o arquivo" + idArtigo)
            } else {
                const artigoAtualizados = data[1];
                response.send(artigoAtualizados);
            }

        }).cath(function (error) {
            response.status(500)
            .send("Ocorreu um erro ao atualizar")
        })
    } 

    exports.deleteAll = (request, response) => {
        tabelaArtigos.destroy ({ where: {}, truncate: false })
        .then(function (itemsDeletados) {
        response.send("Foram deletados" + "itemsDeletados" + "artigos")
        
        }).cacth(function (error) {
            response.status(500)
            .send("Ocorreu um erro ao deletar arquivo")
        });
    
}

exports.delete = (request, response) => {
    const {id:  idArtigo} = request.params;
    tabelaArtigos.destroy({ where: {id: id} })
    .then(function(itemsDeletados) {

        if(itemsDdeletados === 0) {
            response.send("O item com ID " + idArtigo + "Não encontrado");
        } else {
            response.send("Deletado")
        }

    }).catch(function (error) {
        response.status(500)
        .send("Ocorreu um erro ao deletar" + idArtigo)
    })
}