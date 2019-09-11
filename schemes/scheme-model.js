const db = require('../data/db-config.js');

function find() {
    return db('schemes')
    .select()
    .then(schemes => {
        return schemes;
    })
}

function findById(id) {
    return db('schemes')
    .select()
    .where({ id: id })
    .first()

    .then(res => {
        if (res) {
            return res;
        } else {
            return null;
        }
    })

}

module.exports = {
    find,
    findById,
}