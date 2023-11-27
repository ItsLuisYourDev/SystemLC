const metodosBd = {}
const db = require('../database/db')

metodosBd.get = (req, res) => {
    db.find({}, (err, datos) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.json(datos)
        }
    })
}
metodosBd.getId = (req, res) => {
    const userId = req.params.id;
    db.findOne({ _id: userId }, (err, user) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(user);
        }
    });
}
metodosBd.insert = (req, res) => {
    const newUser = req.body;
    db.insert(newUser, (err, user) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(user);
        }
    });
}

metodosBd.deleted = (req, res) => {
    const userId = req.params.id;
    db.remove({ _id: userId }, {}, (err, numRemoved) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ message: `Usuario eliminado: ${numRemoved} registros eliminados` });
        }
    });
}
metodosBd.deleteAll=((req, res) => {
    db.remove({}, { multi: true }, (err, numRemoved) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ message: `Todos los usuarios eliminados: ${numRemoved} registros eliminados` });
        }
    });
});

metodosBd.update = (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    db.update({ _id: userId }, { $set: updatedUser }, {}, (err, numReplaced) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ message: `Usuario actualizado: ${numReplaced} registros modificados` });
        }
    });
}
module.exports = metodosBd;