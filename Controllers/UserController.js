
const User = require('../Models/Account');
const bcrypt = require('bcryptjs')

exports.getAllusers = async (req, res) => {


    try {
        const user = await User.find()
        res.send({ message: 'Users :  ', user })

    } catch (error) {
        res.status(500).send({ message: 'erruer serveur ' || error })
    }

}



exports.getuserbyid = async (req, res) => {

    try {
        const user = await User.findById(req.params.id, { Password: 0 })
        res.status(200).send(user)

    } catch (error) {
        res.status(500).send({ message: 'erreur serveur ' || error })
        console.log(error)
    }

}
exports.adduser = async (req, res) => {
    try {
        const verif = await User.findOne({ Email: req.body.Email })
        if (verif) {
            res.status(400).send({ message: ' User already exist' })
        } else {
            const salt = bcrypt.genSaltSync(10);
            req.body.Password = bcrypt.hashSync(req.body.Password, salt);
            await User.create(req.body)
            res.send({ message: 'User added succefully' })
        }
    } catch (error) {
        res.status(500).send({ message: 'error server' })
    }
}

exports.updateuser = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        req.body.Password = bcrypt.hashSync(req.body.Password, salt);
        await User.findByIdAndUpdate(req.params.id, req.body)
        const updateduser = await User.findById(req.params.id)
        res.status(200).send({ message: 'user has been updated ', update: updateduser })
    } catch (error) {
        res.status(500).send({ message: 'erruer serveur ' || error })
    }
}

exports.changeStatus = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id)
        await User.findByIdAndUpdate(req.params.id, { Status: user.Status ? false : true }, { new: true })
        res.send({ message: 'user has been updated ' })
    } catch (error) {
        res.status(500).send({ message: error || 'erruer serveur ' })
    }
}


// exports.deleteUser = async (req, res) => {
//     try {

//         const deleted = await User.findByIdAndDelete(req.params.id)
//         res.status(200).send({ message: 'user has been deleted ', deleted })

//     } catch (error) {
//         res.status(500).send({ message: 'erruer serveur ' || error })
//     }
// }
