const express = require('express');
const helmet = require('helmet');
// App setup
const app = express();
const server = app.listen(9000, function() {
  console.log('Listening on port 9000');
});

app.use(express.static('Application'));
app.use(helmet());
