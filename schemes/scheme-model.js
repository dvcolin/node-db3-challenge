const db = require("../data/db-config.js");

function find() {
  return db("schemes")
    .select()
    .then(schemes => {
      return schemes;
    });
}

function findById(id) {
  return db("schemes")
    .select()
    .where({ id: id })
    .first()

    .then(res => {
      if (res) {
        return res;
      } else {
        return null;
      }
    });
}

function findSteps(id) {
    return db('steps')
    .select('scheme_name','step_number', 'instructions').from('steps')
    .join('schemes', 'schemes.id', '=', 'steps.scheme_id')
    .where({ scheme_id: id })

    .then(res => {
        if (res) {
          return res;
        } else {
          return null;
        }
      });
}

function add(scheme) {

}


function update(changes, id) {

}

function remove(id) {

}



module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};
