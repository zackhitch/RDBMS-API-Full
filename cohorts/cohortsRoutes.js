const express = require('express');

const db = require('./cohortsModel.js');

const router = express.Router();

router.get('/', (req, res) => {
  db.find()
    .then(cohorts => {
      res.status(200).json(cohorts);
    })
    .catch(err => {
      err => {
        res.status(500).json(err);
      };
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.findById(id)
    .then(cohort => {
      if (cohort) {
        res.status(200).json(cohort);
      } else {
        res.status(404).json({ error: `No cohort by the supplied ID.` });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get('/:id/students', (req, res) => {
  const { id } = req.params;
  db.findStudentsByCohort(id)
    .then(students => {
      if (students) {
        res.status(200).json(students);
      } else {
        res.status(404).json({ error: `No students at specified ID.` });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  const cohort = req.body;
  db.add(cohort)
    .then(id => {
      if (id > 0) {
        res.status(201).json(id);
      } else {
        res.status(404).json({ error: `Name is required. Try again.` });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const cohort = req.body;

  db.update(id, cohort)
    .then(count => {
      if (count > 0) {
        res.status(201).json(count);
      } else {
        res.status(404).json({
          error: `Unable to update cohort. Valid ID and name required.`,
        });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.remove(id)
    .then(count => {
      if (count > 0) {
        res.status(201).json(count);
      } else {
        res
          .status(404)
          .json({ error: `Unable to remove cohort. Ensure ID is v` });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
