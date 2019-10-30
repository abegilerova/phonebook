import React, { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Filter from './components/Filter';
import axios from 'axios'

const App = (props) => {



  const [persons, setPersons] = useState([{
    name: 'Arto Hellas',
    number: '0700249207',
    id: 0

  }
  ])

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled', response.data)
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons');

  const [foundPeople, setFoundPeople] = useState([]);
  const [newSearch, setNewSearch] = useState('');



  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newSearch={newSearch} setNewSearch={setNewSearch} persons={persons} setFoundPeople={setFoundPeople} />
      <h3>add a new </h3>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h3>Numbers</h3>
      <Persons newSearch={newSearch} foundPeople={foundPeople} persons={persons} setPersons={setPersons} />
    </div>
  )
}

export default App;

