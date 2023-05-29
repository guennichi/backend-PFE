const File = require('../Models/fileManager');
exports.getdatafiles = async (req, res) => {


    try {
        const data = await File.find()
        if (data.length == 0) {
            res.status(200).send({ message: 'no data has been found try yto insert new data ' })

        } else {
            res.status(200).send({ message: 'this is list of my files', data: data })

        }
    } catch (error) {
        res.status(500).send({ message: error.message || 'erruer serveur ' })
    }
}

