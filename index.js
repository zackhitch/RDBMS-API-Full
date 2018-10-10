const express = require('express');
const helmet = require('helmet');

const cohortsRoutes = require('./cohorts/cohortsRoutes.js');

const server = express();

const port = 9080;

server.use(helmet(), express.json());

server.use('/api/cohorts', cohortsRoutes);

server.listen(port, () =>
  console.log(`\n=== API running on port: ${port} ===\n`)
);
