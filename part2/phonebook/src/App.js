import { useState } from "react";
import PersonForm from "./PersonForm";
import PersonList from "./PersonList";
import SearchFilter from "./SearchFilter";

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
      <SearchFilter searchHandle={searchHandle} searchTerm={searchTerm} />
      <h2>Added new phone list</h2>
      <PersonForm  handleSubmit = {handleSubmit} newName= {newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <PersonList searchResults={searchResults} persons={persons} />
    </div>
  );
}

export default App;
