const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        const newFileName = Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileExtensions = ['.xls', '.xlsx', '.csv']
    const extension = path.extname(file.originalname);
    cb(null, allowedFileExtensions.includes(extension));
}


// inside multer({}), file upto only 1MB can be uploaded
const uploadFile = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 100000000 }
});

module.exports = uploadFile;