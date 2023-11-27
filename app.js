const express = require("express");
// const sqlite3 = require('sqlite3');
const app = express()
app.use(express.json());
// app.use(express.urlencoded({extended:false}))
app.set("port", 3000)
// CORDS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", `http://127.0.0.1:${app.get("port")}`);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static("./public"))
app.use("/", require("./router/rutaSystem"))
app.use("/db", require("./router/rutasBd"))
// Definir una ruta "catch-all" para manejar las solicitudes a rutas inexistentes
app.use((req, res) => {
    res.status(404).render("../view/errores/solicitudInexitente.ejs",{pageTitle: "Error 404"});
});

module.exports = app
