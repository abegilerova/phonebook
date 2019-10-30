import React from 'react';
import personService from '../services/persons';


const Persons = ({ newSearch, foundPeople, persons, id, setPersons }) => {

    const deletePerson = (id, name) => {
        console.log('deleting')
        if (window.confirm(`Delete ${name}?`)) {
            personService.deleteObject(id).then(id => {
                setPersons(persons.filter(p => p.id !== id))
            })
        }
    }

    const displayNames = () => newSearch.length > 0 ? foundPeople.map(el => <li key={el.id}>{el.name} {el.number} <button>Delete</button></li>) : persons.map(el => <li key={el.id}>{el.name} {el.number} <button onClick={() => deletePerson(el.id, el.name)}>Delete</button></li>);


    return (
        <div>
            <ul>
                {displayNames()}
            </ul>

        </div>
    )
}

export default Persons
