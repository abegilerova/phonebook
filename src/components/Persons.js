import React from 'react';


const Persons = ({ newSearch, foundPeople, persons }) => {

    const displayNames = () => newSearch.length > 0 ? foundPeople.map(el => <li key={el.id}>{el.name} {el.number}</li>) : persons.map(el => <li key={el.id}>{el.name} {el.number}</li>);


    return (
        <div>
            <ul>
                {displayNames()}
            </ul>

        </div>
    )
}

export default Persons
