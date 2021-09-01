const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let dataSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    city: {
        type: String
    }
}, {
    collection: 'customer'
})

module.exports = mongoose.model('Customer', dataSchema)