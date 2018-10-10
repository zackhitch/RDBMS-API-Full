const knex = require('knex');

const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
  findStudentsByCohort,
};

function find() {
  return db('cohorts');
}

function findById(id) {
  return db('cohorts')
    .where({ id })
    .first();
}

function findStudentsByCohort(cohortId) {
  return db('students').where('cohort_id', cohortId);
}

function add(cohort) {
  return db('cohorts')
    .insert(cohort)
    .into('cohorts');
}

function update(id, changes) {
  return db('cohorts')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('cohorts')
    .where({ id })
    .del();
}
