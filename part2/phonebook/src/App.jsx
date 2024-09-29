import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-1234567' }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addContact = (event) => {
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


    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addContact}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} /><br />
                    number: <input value={newNumber} onChange={handleNumberChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map(person =>
                <div key={person.name}>{person.name} {person.number}</div>
            )}
        </div>
    )
}

export default App
