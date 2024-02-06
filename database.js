
const mongoose = require('mongoose');

class Database{
    constructor() {
        this.connect();
    }
    connect() {
        mongoose.connect('mongodb+srv://sarveshpandey:AR2DEqt5xtRdD8tQ@tweater.qobp4xk.mongodb.net/?retryWrites=true&w=majority').
            then(() => {
                console.log('Connection is strong');
            })
            .catch((err) => {
                console.log("Error is found" + err);
            })
    }
}

module.exports = new Database();


/// database is connected using mongoose 
    