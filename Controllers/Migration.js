const Migration = require('../Models/Migration')
const path = require('path');
const excelTojson = require('convert-excel-to-json');
const fs = require('fs-extra');

exports.getdata = async (req, res) => {
    try {
        const data = await Migration.find()
        if (data.length == 0) {
            res.send({ message: 'no data has been found try yto insert new data ' })
        } else {
            res.status(200).send({ message: 'this is list of my migartion', data: data })
        }
    } catch (error) {
        res.status(500).send({ message: error.message || 'erruer serveur' })
    }


}

exports.addData = async (req, res) => {
    try {
        console.log(req.file);
        if (req.file?.filename == null || req.file?.filename == 'undefined') {
            res.status(400).json({ message: 'Le fichier doit etre de type csv/xlsx/xls !' });
        } else {
            // var filePath = path.resolve('./uploads/' + req.file.filename);
            const excelData = excelTojson({
                sourceFile: path.resolve('./uploads/' + req.file.filename),
                header: {
                    rows: 1,
                },
                columnToKey: {
                    '*': '{{columnHeader}}'
                },
            });
            await Migration.insertMany(excelData['Feuil1'])
            res.json({ message: 'Added successfully' })
        }
    } catch (error) {
        res.status(500).send({ message: 'erreur serveur ' })
    }
}