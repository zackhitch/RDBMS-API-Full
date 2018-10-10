exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('students').insert([
        { name: 'Zack', cohort_id: 1 },
        { name: 'Kait', cohort_id: 1 },
        { name: 'Chris', cohort_id: 1 },
      ]);
    });
};
