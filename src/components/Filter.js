import React from 'react';


const Filter = ({ newSearch, setNewSearch, persons, setFoundPeople }) => {

    const handleSearch = (event) => {
        setNewSearch(event.target.value);
        const filteredPeople = persons.filter(el => el.name.includes(newSearch));
        setFoundPeople(filteredPeople);
    }


    return (
        <div>
            filter shown with <input value={newSearch} onChange={handleSearch} />
        </div>
    )
}

export default Filter
