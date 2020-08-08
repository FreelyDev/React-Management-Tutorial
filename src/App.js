import React from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
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
  ]
function App() {
  return (
    <div>
      {
        customers.map(c => {
          return(
            <Customer
              key = {c.id}
              id = {c.id}
              image = {c.image}
              name = {c.name}
              birthday = {c.birthday}
              gender = {c.gender}
              job = {c.job}
            />
          );
        })
      }
    </div>
    
  );
}

export default App;
