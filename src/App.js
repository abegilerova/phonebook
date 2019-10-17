import React, { useState } from 'react';


const App = (props) => {
  const [persons, setPersons] = useState([{
    name: 'Arto Hellas'
  }
  ])

  const [newName, setNewName] = useState('');
  const [showAll, setShowAll] = useState(true)

  const handlePersonChange = (event) => {
    console.log(event);
    console.log(event.target.value);
    setNewName(event.target.value);
  }

  const addPerson = (event) => {
    event.preventDefault();
    console.log('form submitted', event.target);
    console.log(typeof newPerson);
    const personObject = {
      name: newName
    };

    setPersons(persons.concat(personObject))
    setNewName('')
  }


  //const personsToShow=showAll? persons: persons.filter(note.import)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson} >
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>

        <div>
          <button type="submit">add</button>

        </div>
      </form>
      <h2>Numbers</h2>
    </div>
  )
}

export default App;
