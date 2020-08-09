const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true}));

app.get('/api/customers', (req, res)=>{
    res.send([
        {
          'id':1,
          'image':'http://placeimg.com/64/64/1',
          'name':'Hong',
          'birthday':'961222',
          'gender':'M',
          'job':'student'
        },
        {
          'id':2,
          'image':'http://placeimg.com/64/64/2',
          'name':'Xu',
          'birthday':'881101',
          'gender':'M',
          'job':'programmer'
        },
        {
          'id':3,
          'image':'http://placeimg.com/64/64/3',
          'name':'Jang',
          'birthday':'990305',
          'gender':'W',
          'job':'designer'
        }
    ]);
});

app.listen(port, ()=> console.log(`Listening on port ${port}`));