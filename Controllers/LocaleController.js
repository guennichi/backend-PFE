const Locale = require("../Models/Locale")
const PaysModel = require("../Models/Pays")



exports.addlocal = async (req, res) => {
    try {
        const verif = await Locale.findOne({ Nom: req.body.Nom })
        if (verif) {
            res.status(400).send({ message: 'locale already exist' })
        } else {
            const Pays = await PaysModel.findOne({ nom: req.body.Pays })
            console.log(Pays);
            const newlocal = await Locale.create(req.body)
            await PaysModel.findByIdAndUpdate(Pays._id, { $push: { Locales: newlocal._id } })
            res.status(200).send({ message: 'locale added succefully' })
        }

    } catch (error) {
        res.status(500).send({ message: error.message || 'erruer serveur ' })
        console.log(error)
    }
}

exports.getAlllocale = async (req, res) => {

    try {
        const locale = await Locale.find()
        res.send(locale)

    } catch (error) {
        res.status(500).send({ message: error.message || 'erruer serveur ' })
    }

}

exports.getlocalebyid = async (req, res) => {

    try {
        const locale = await Locale.findById(req.params.id).populate('Responsables')
        res.status(200).send(locale)
    } catch (error) {
        res.status(500).send({ message: error.message || 'erruer serveur ' })

    }

}
exports.updatelocale = async (req, res) => {

    try {
        await Locale.findByIdAndUpdate(req.params.id, req.body)
        const updated = await Locale.findById(req.params.id)
        res.status(200).send({ message: 'locale has been updated ', updated })
    } catch (error) {
        res.status(500).send({ message: error.message || 'erruer serveur ' })

    }

}
exports.deletelocale = async (req, res) => {
    try {

        const deleted = await Locale.findOneAndDelete({ _id: req.params.id })
        res.status(200).send({ message: 'locale has been deleted ', deleted })

    } catch (error) {
        res.status(500).send({ message: error.message || 'erruer serveur ' })
    }
}