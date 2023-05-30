const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const passport = require('passport');
const path = require('path');

require('./common/initScript')
// require midlleware
require('./Passport/Bearer')
// connect to database
require('./Database/Connect.js');

// Create express App
const app = express();
const port = 4000;
// Common Configurations
app.use(cors())
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: 50 * 1024 * 1024 }))
app.use(bodyParser.urlencoded({ limit: 50 * 1024 * 1024, extended: true, parameterLimit: 50000 }))
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

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
app.use('/api/v1', require('./Routes/AuthRoutes'))
app.use('/api/v1', require('./Routes/Affectation'))
app.use('/api/v1', require('./Routes/Local'))
app.use('/api/v1', require('./Routes/pays'))
app.use('/api/v1', require('./Routes/user'))
app.use('/api/v1', require('./Routes/Responsable'))

// End route section

app.listen(process.env.port || port, function () {
    console.log(`Backend server start on port ${port}`);
});