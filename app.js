'use strict';

const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});

module.exports = app;
