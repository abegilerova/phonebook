import React, { useState } from 'react';
import personService from '../services/persons';


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
        const personsFiltered = persons.filter(person => person.name === newName);
        // console.log('form submitted', event.target);
        // console.log(typeof newPerson);
        const personObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1,
        }

        if (personsFiltered.length > 0) {
            if (window.confirm(`${newName} is already added to phonebook, replace the old number with new one?`)) {
                const idToBeUpdated = personsFiltered[0].id;
                personService
                    .update(idToBeUpdated, personObject)
                    .then(updatedPerson => {
                        setPersons(persons.map(person => person.id !== idToBeUpdated ? person : updatedPerson))
                        setNewName('')
                        setNewNumber('')
                    })
            }
        } else {
            personService
                .create(personObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setNewName('')
                    setNewNumber('')
                })
        }

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
