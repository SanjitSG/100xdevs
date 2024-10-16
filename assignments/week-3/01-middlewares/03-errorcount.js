const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let errorCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint


app.get('/user', (req, res) => {
  throw new Error("User not found");
});

app.post('/user', (req, res) => {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', (req, res) => {
  res.status(200).json({ errorCount });
});

// error handling middleware
app.use((err, req, res, next) => {
  res.status(404).send({})
  errorCount = errorCount + 1;
})


module.exports = app;