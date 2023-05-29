const Migration = require('../Models/Migration')


exports.getdata = async (req, res) => {


    try {
        const data = await Migration.find()
        if (data.length == 0) {
            res.status(200).send({ message: 'no data has been found try yto insert new data ' })

        } else {
            res.status(200).send({ message: 'this is list of my migartion', data: data })

        }
    } catch (error) {
        res.status(500).send({ message: error.message || 'erruer serveur ' })
    }


}

exports.adddata = async (req, res) => {


    try {
        const data = await Migration.create(req.body)
        res.status(200).send({ message: 'data has been uploded ' })
    } catch (error) {
        res.status(500).send({ message: error.message || 'erruer serveur ' })
    }

}
exports.findbyAge = async (req, res) => {


    try {
        const dataAge = await Migration.find({ Age: req.body.Age })
        res.status(200).send(dataAge)
    } catch (error) {
        res.status(500).send({ message: error.message || 'erruer serveur ' })
        console.log(error)
    }
}
exports.findbyGenre = async (req, res) => {


    try {
        const dataGenre = await Migration.find({ Genre: req.body.Genre })
        res.status(200).send(dataGenre)
    } catch (error) {
        res.status(500).send({ message: error.message || 'erruer serveur ' })
        console.log(error)
    }
}
exports.findbyAnnee = async (req, res) => {


    try {
        const dataAnnee = await Migration.find({ Annee: req.body.Annee })
        res.status(200).send(dataAnnee)
    } catch (error) {
        res.status(500).send({ message: error.message || 'erruer serveur ' })
        console.log(error)
    }
}
exports.findbyNombre = async (req, res) => {


    try {
        const dataNombre = await Migration.find({ Nombre: req.body.Nombre })
        res.status(200).send(dataNombre)
    } catch (error) {
        res.status(500).send({ message: error.message || 'erruer serveur ' })
        console.log(error)
    }
}
