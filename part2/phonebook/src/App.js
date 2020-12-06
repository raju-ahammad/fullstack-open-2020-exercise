import { useState } from "react";

function App() {

  const initialPerson = [
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]
  const [persons, setPersons] = useState(initialPerson)
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const searchHandle = (e) => {
    setSearchTerm(e.target.value)
  }

  const searchResults = !searchTerm 
          ? persons 
          : persons.filter(person => person.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  
  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName === "" && newNumber === "") {
      return alert("value is empty")
    }
    persons.forEach((person) => {
      if (person.name === newName){
        return alert(`${person.name} is already added to phonebook `)
      }else{
        setPersons([...persons, {name: newName, phone: newNumber}])
        setNewName("")
        setNewNumber("")
      }
    })
    
    
  }

  return (
    <div className="">
      <h2>PhoneBook</h2>
      <p>Search value { searchTerm }</p>
      <div>filter shown with name <input onChange={searchHandle} value={searchTerm} type="text"/></div>
      <h2>Added new phone list</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" value={ newName } onChange={handleNameChange} />
          </div>
          <div>
            <label htmlFor="phone">Phone: </label>
            <input type="text" value={ newNumber } onChange={handleNumberChange} />
          </div>
        </div>
        <div><button type="submit">Add</button></div>
      </form>
      <h2>Numbers</h2>
      <div> {newName}  {newNumber} </div>
      <div>
        {
          !searchResults
          ? persons.map((person, index) => {
            return (
              <div key={index}>
                <p> {index + 1 }. { person.name } {person.phone} </p>
              </div>
            );
          })
          : searchResults.map((search, index) => {
            return (
              <div key={index}>
                <p> {index + 1 }. { search.name } {search.phone} </p>
              </div>
            );
          })
        } 
          
      </div>
    </div>
  );
}

export default App;
