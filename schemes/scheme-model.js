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
    return db('schemes')
    .select( 'steps.id', 'scheme_name', 'step_number', 'instructions')
    .join('steps', 'schemes.id', '=', 'steps.scheme_id')
    .where({ scheme_id: id })
    .orderBy('step_number', 'asc')

    .then(res => {
        if (res) {
          return res;
        } else {
          return null;
        }
      });
}

function add(scheme) {
    return db('schemes')
    .insert(scheme)
    .then(scheme => {
        return scheme[0];
    })
}


function update(changes, id) {
    return db('schemes')
    .where({ id: id })
    .update({
        scheme_name: changes.scheme_name
    })
    .then(updated => {
        return updated;
    })

}

function remove(id) {
    return db('schemes')
    .where({ id: id })
    .delete()
    .then(deleted => {
        return deleted;
    })
}



module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};
