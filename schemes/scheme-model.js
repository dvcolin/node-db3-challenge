const db = require('../data/db-config.js');

function find() {
    return db('schemes')
    .select()
    .then(schemes => {
        return schemes;
    })
}

module.exports = {
    find,
}