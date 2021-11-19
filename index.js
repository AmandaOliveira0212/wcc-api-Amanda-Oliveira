const express = require("express");
const app = express();
const port = 8080;
//mvc

//get obter
//post criar
//put atualizar
//delete deletar

//npm instal --save-dev-nodemon
app.use(express.json());

app.get("/", function(req, res) {
    res.send("Dasa Educa - Artigos");
});

const database = require("./models");
database.sequelizeDatabase.sync();
// database.sequelizeDatabase.sync({ force: true}).then(() => {
//    console.log("Drop and re-sync db.");
// });

const router = require("./routes/artigos.routes");
router(app);

app.listen(port, function() {
    console.log("Ouvindo a porta: ", port);
});