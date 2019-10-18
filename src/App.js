import React, { useState } from 'react';


const App = (props) => {
  const [persons, setPersons] = useState([{
    name: 'Arto Hellas'
  }
  ])

  const [newName, setNewName] = useState('');
  const [showAll, setShowAll] = useState(true)

  const handlePersonChange = (event) => {
    //console.log(event);
    // console.log(event.target.value);
    setNewName(event.target.value);
  }

  const addPerson = (event) => {
    event.preventDefault();
    console.log('form submitted', event.target);
    console.log(typeof newPerson);
    const personObject = {
      name: newName
    };

    const existingPersons = Object.assign(persons);

    if (existingPersons.filter(el => el.name === newName).length) {
      // console.log("existing persons", existingPersons);
      alert(`${newName} has already been added`)
    } else {
      setPersons(persons.concat(personObject))

    }
    setNewName('');
  }


  const displayNames = () => persons.map(el => <li>{el.name}</li>);




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
      <ul>
        {displayNames()}
      </ul>
    </div>
  )
}

export default App;
