require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connection = require('./db')

// DataBase Connection

connection();

//Express

const app = express();

app.get('/', (req,res) => {
    res.send('Hola');
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })

app.use(express.json())
app.use(cors());




