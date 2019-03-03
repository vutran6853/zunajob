require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');
const app = express();
const port = 3011;

const { getData } = require('./controller/zunaData');

app.use(cors());
app.use(json());

////  Endpoint
app.get('/api/getData', getData);

app.listen(port, () => {
  console.log(`Server is UP and listen on port ${ port }`)
});

