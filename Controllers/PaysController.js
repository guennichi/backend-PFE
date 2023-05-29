const Pays = require('../Models/Pays')

exports.addpays = async (req, res) => {
    try {
        const verif = await Pays.findOne({ nom: req.body.nom })
        if (verif) {
            res.status(400).send({ message: "Pays already exist try another one " })


        } else {
            const added = await Pays.create(req.body)
            res.status(200).send({ message: 'Pays added succefully', pays: added })

        }
    } catch (error) {
        res.status(500).send({ message: error.message || 'erruer serveur ' })


    }
}

exports.getAllpays = async (req, res) => {
    try {
        const pays = await Pays.find()
        res.send(pays)
    } catch (error) {
        res.status(500).send({ message: error.message || 'erruer serveur ' })
    }
}

exports.getpaysbyid = async (req, res) => {
    try {
        const pays = await Pays.findById(req.params.id).populate('Locales')
        res.status(200).send(pays)
    } catch (error) {
        res.status(500).send({ message: error.message || 'erruer serveur ' })
        console.log(error)
    }
}

exports.updatepays = async (req, res) => {
    try {
        await Pays.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).send({ message: 'Pays has been updated ' })
    } catch (error) {
        res.status(500).send({ message: error.message || 'erruer serveur ' })
    }
}

exports.deletePays = async (req, res) => {
    try {
        await Pays.findByIdAndDelete(req.params.id)
        res.status(200).send({ message: 'Pays has been deleted ' })
    } catch (error) {
        res.status(500).send({ message: error.message || 'erruer serveur ' })
    }
}