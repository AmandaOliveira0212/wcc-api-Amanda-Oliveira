// model da tabela de artigos

const { defaultValueSchemable } = require("sequelize/types/lib/utils");

module.exports = (sequelizeDatabase, Sequelize) => {
    const Artigo = sequelizeDatabase.define("artigos", {
        titulo: {
            type: Sequelize.STRING
        },
        descricao: {
            type: Sequelize.STRING,
            defaultValue: "testando"
            
        },
        publicado: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    });

    return Artigo;
}