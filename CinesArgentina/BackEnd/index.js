const express = require ('express');
const morgan = require ('morgan');
const app = express();

const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routees
app.use('/api/cines', require('./routes/cines.routes'));

// staring the server
app.listen(app.get('port'), () => {
    console.log('server on port' , app.get('port'));
});