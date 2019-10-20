import React, { useState } from 'react';


const PersonsForm = ({ persons, setPersons }) => {
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value);
    }

    const addPerson = (event) => {
        event.preventDefault();
        // console.log('form submitted', event.target);
        // console.log(typeof newPerson);
        const personObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1,
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

    return (
        <form onSubmit={addPerson} >
            <div>
                name: <input value={newName} onChange={handleNameChange} />
                number: <input value={newNumber} onChange={handleNumberChange} />
            </div>

            <div>
                <button type="submit">add</button>

            </div>
        </form>
    )
}

export default PersonsForm
