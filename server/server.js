const express = require('express');
const app = express();
const PORT = 3001;
const bodyParser = require('body-parser');
const expressSearch = require('./controllers/fritzController.js');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.get('/', (req, res, next) => res.sendFile(process.cwd() + '/public/html/index.html'));
app.post('/', expressSearch);

app.listen(PORT, () => console.log('listening on port ' + PORT));
