import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])

    const [filteredName, setFilteredName] = useState('');
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        const newPerson = { name: newName, number: newNumber }

        // Add the new person to the persons array if the name is not already present
        if (!persons.some(person => person.name === newName)) {
            setPersons(persons.concat(newPerson))
        } else {
            alert(`${newName} is already added to the phonebook`)
        }

        // Clear the input after adding
        setNewName('')
        setNewNumber('')
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleFilteredNameChange = (event) => {
        setFilteredName(event.target.value);
    }

    const personsToShow = persons.filter(person => person.name.includes(filteredName));

    return (
        <div>
            <h2>Phonebook</h2>
            filter shown with <input value={filteredName} onChange={handleFilteredNameChange} />
            <h2>add a new</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} /><br />
                    number: <input value={newNumber} onChange={handleNumberChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {personsToShow.map(person =>
                <div key={person.name}>{person.name} {person.number}</div>
            )}
        </div>
    )
}

export default App
