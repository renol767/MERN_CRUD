let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');

// Express Route
const Route = require('./routes/route');

// Connect Mongo DB
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true
}).then(() => {
    console.log('Database Connected')
}, error => {
    console.log('Database Error : ' + error)
})

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use('/customer', Route);

// PORT
const port = process.env.PORT || 4000
// eslint-disable-next-line no-unused-vars
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})


app.use(function (err, req, res, next) {
    console.log(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});