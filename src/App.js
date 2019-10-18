import React, { useState } from 'react';


const App = (props) => {
  const [persons, setPersons] = useState([{
    name: 'Arto Hellas',
    number: '0700249207'
  }
  ])

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleNameChange = (event) => {
    //console.log(event);
    // console.log(event.target.value);
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }



  const addPerson = (event) => {
    event.preventDefault();
    console.log('form submitted', event.target);
    console.log(typeof newPerson);
    const personObject = {
      name: newName,
      number: newNumber
    };

    const existingPersons = Object.assign(persons);

    if (existingPersons.filter(el => el.name === newName).length) {
      // console.log("existing persons", existingPersons);
      alert(`${newName} has already been added`)
    } else {
      setPersons(persons.concat(personObject))

    }
    setNewName('');
    setNewNumber('');
  }


  const displayNames = () => persons.map(el => <li>{el.name} {el.number}</li>);




  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson} >
        <div>
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
