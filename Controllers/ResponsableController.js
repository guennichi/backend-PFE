
const LocaleModel = require("../Models/Locale");
const PaysModel = require("../Models/Pays");
const Responsable = require("../Models/Responsable")



exports.addresponsable = async (req, res) => {
    try {

        const verif = await Responsable.findOne({ Nom: req.body.Nom })
        if (verif) {
            res.status(400).send({ message: ' responsable alrady exist' })
        } else {

            const added = await Responsable.create(req.body)
            res.status(200).send({ message: 'responsable added succefully', added })
        }


    } catch (error) {
        res.status(500).send({ message: error.message || 'erruer serveur ' })
        console.log(error)
    }
}
exports.getAllresponsable = async (req, res) => {
    try {
        const responsable = await Responsable.find()
        res.send(responsable)
    } catch (error) {
        res.status(500).send({ message: error.message || 'erruer serveur ' })
    }
}



exports.getresponsablebyid = async (req, res) => {

    try {
        const responsable = await Responsable.findById(req.params.id).populate('Pays')
        res.status(200).send({ message: 'Responsable ', responsable })
    } catch (error) {
        res.status(500).send({ message: error.message || 'erruer serveur ' })

    }

}
exports.updateresponsable = async (req, res) => {

    try {
        const responsable = await Responsable.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).send({ message: 'Responsable has been updated ', responsable })
    } catch (error) {
        res.status(500).send({ message: error.message || 'erruer serveur ' })

    }

}
exports.deleteResponsable = async (req, res) => {
    try {

        const deleted = await Responsable.findByIdAndDelete(req.params.id)
        res.status(200).send({ message: 'Responsable has been deleted ', deleted })

    } catch (error) {
        res.status(500).send({ message: error.message || 'erruer serveur ' })
    }
}