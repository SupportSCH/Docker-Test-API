'use strict';
const express = require('express');

const app = require('./router.js')

const port = 4201;
const HOST = '0.0.0.0';

app.listen(port, () => {
    console.log('App running on port', port)
    console.log(`Running on http://${HOST}:${port}`);
})