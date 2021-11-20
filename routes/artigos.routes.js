// rotas do sistema de atigos
/*
    GET 
        -obter todos os artigos
        -obter um artigo especifico
        -obter todos os artigos publicados

    POST
        -criar um novo artigo
    
    PUT
        -publicar meu artigo
        
    DELETE
        -deletar um artigo
*/

module.exports = (app) => {
    const artigosController = require("../controllers/artigos.controller");
    let router = require("express").Router();

    router.post("/", artigosController.create);

    router.get("/", artigosController.findAll);

    router.get("/findByPk", artigosController.findByPk);

    router.get("/findOne", artigosController.findOne);


    app.use("/artigos", router);
}