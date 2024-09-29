import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' }
    ])
    const [newName, setNewName] = useState('')

    const addName = (event) => {
        event.preventDefault()
        const newPerson = { name: newName }

        // Add the new person to the persons array if the name is not already present
        if (!persons.some(person => person.name === newName)) {
            setPersons(persons.concat(newPerson))
        } else {
            alert(`${newName} is already added to the phonebook`)
        }

        // Clear the input after adding
        setNewName('')
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addName}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map(person =>
                <div key={person.name}>{person.name}</div>
            )}
        </div>
    )
}

export default App
