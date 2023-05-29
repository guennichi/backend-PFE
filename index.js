const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const multer = require('multer');
const passport = require('passport');
const File = require('./Models/fileManager');

const upload = multer({ dest: 'upload/' });
// require midlleware
require('./common/initScript')
require('./Passport/Bearer')
// connect to database
require('./Database/Connect.js');

// Create express App
const app = express();
const port = 4000;
// Common Configurations
app.use(cors())
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('express-session')({ secret: 'Secret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


// Use this if the 4th param is default value(false)
//job.start()
// Routes sections


// Home Route
app.get('/', async (req, res) => {
    res.json({ message: 'Welcome to my REST API.' });
});

app.use('/api/v1', require('./Routes/MigrationRoute'))
app.use('/api/v1', require('./Routes/fileManager'))
app.use('/api/v1', require('./Routes/AuthRoutes'))
app.use('/api/v1', require('./Routes/Affectation'))
app.use('/api/v1', require('./Routes/Local'))
app.use('/api/v1', require('./Routes/pays'))
app.use('/api/v1', require('./Routes/user'))
app.use('/api/v1', require('./Routes/Responsable'))
app.post('/api/v1/upload', upload.single('file'), (req, res) => {
    // Save the file details to the database

    try {

        const file = {
            name: req.file.originalname,
            path: req.file.path,
            size: req.file.size,

        };

        File.create(file)
        res.send({ message: 'uploaded ' })
    } catch (error) {
        res.status(500).send({ message: 'erreur serveur ' })


    }



});


// End route section

app.listen(process.env.port || port, function () {
    console.log(`Backend server start on port ${port}`);
});