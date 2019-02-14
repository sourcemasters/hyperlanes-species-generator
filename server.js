const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const pgp = require('pg-promise');


// indicate that server is up and running on console.log
app.listen(port, () => console.log(`Listening on port ${port}`));

// GET route as placeholder to check backend connection
app.get('/express_backend', (req, res) => {
    res.send({express: 'express backend now connected to react'});
});