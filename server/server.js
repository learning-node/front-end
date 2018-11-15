const express = require('express');
const app = express();
const PORT = 3001;
const bodyParser = require('body-parser');
const expressSearch = require('./controllers/fritzController.js');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

// Food for thought: No app.get and yet a GET request to '/' still works. Why?
app.post('/', expressSearch);

app.listen(PORT, () => console.log('listening on port ' + PORT));
