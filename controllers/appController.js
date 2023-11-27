const myApps = {}
const db =require('../database/db') 

myApps.passwordGereator = (req, res) => {
    console.log("-------estoy consultando get")
    console.log(req.body)
    res.json({
        nombre: "luis"
    })
}

myApps.offPc = (req, res) => {
    console.log("-------apagando la pc")
    const { exec } = require('child_process');

    // Comando para apagar la PC en Windows
    const comando = 'shutdown /s /t 0';

    exec(comando, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error al ejecutar el comando: ${error}`);
            return;
        }
        console.log(`Apagando la PC...`);
    });
    res.json({
        nombre: "luis"
    })
}

myApps.insertar = (req,res)=>{
    console.log(req.body)
    const newUser = req.body
    db.insert(newUser,(err,user)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.json(user)
        }
    })
    console.log("hola mundos")
}

module.exports = myApps;