import { useState } from 'react'

const Person = ({person}) => {
  return (
    <div key = {person.content}>{person.content} {person.number}</div>
  )
}

const Individual = ({p}) => {
  return (
    <div>{p.number}</div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([{content: '', number: ''}]) 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [searchName,setSearchName] = useState('')
  
  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      content: newName,
      number: newNumber,
    }
    
    
      if (persons.some((person) => person.content===newName)) {
        alert(`${newName} is already added to the phonebook` )
        
      }
      else {
        setPersons(persons.concat(nameObject))
        
        setNewName('')
        setNewNumber('')
      }
  }
  
  const handleNameChange = (event) => {
    
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    
    setNewNumber(event.target.value)
  }
  const handleSearchChange = (event) => {
    
    setSearchName(event.target.value)
  }
  
  const filterName = persons.filter((person) => person.content.toLowerCase().includes(searchName.toLowerCase()))

  
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter : <input value = {searchName} onChange={handleSearchChange} />
      </div>
       <div>
       {filterName.map((p) => (<Individual p={p}/>))}
      </div>
     
      <form onSubmit={addName} >
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person=><Person person={person} />)}
      
        </div>
    </div>
  )
}

export default App