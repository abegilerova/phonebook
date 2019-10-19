import React, { useState } from 'react';


const App = (props) => {
  const [persons, setPersons] = useState([{
    name: 'Arto Hellas',
    number: '0700249207'
  }
  ])

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newSearch, setNewSearch] = useState('');
  const [foundPeople, setFoundPeople] = useState([]);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleSearch = (event) => {
    setNewSearch(event.target.value);
    const filteredPeople = persons.filter(el => el.name.includes(newSearch));
    setFoundPeople(filteredPeople);
  }

  const addPerson = (event) => {
    event.preventDefault();
    // console.log('form submitted', event.target);
    // console.log(typeof newPerson);
    const personObject = {
      name: newName,
      number: newNumber
    };

    const existingPersons = Object.assign(persons);

    if (existingPersons.filter(el => el.name === newName).length) {
      // console.log("existing persons", existingPersons);
      alert(`${newName} has already been added or you did't entry any input`)
    } else {
      setPersons(persons.concat(personObject))

    }
    setNewName('');
    setNewNumber('');
  }


  const displayNames = () => newSearch.length > 0 ? foundPeople.map(el => <li>{el.name} {el.number}</li>) : persons.map(el => <li>{el.name} {el.number}</li>);

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input value={newSearch} onChange={handleSearch} />
      <form onSubmit={addPerson} >
        <div>
          <h1>add a new </h1>
          name: <input value={newName} onChange={handleNameChange} />
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>

        <div>
          <button type="submit">add</button>

        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {displayNames()}
      </ul>
    </div>
  )
}

export default App;
