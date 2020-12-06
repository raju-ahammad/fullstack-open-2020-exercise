import axios from "axios";
import { useEffect, useState } from "react";
import PersonForm from "./PersonForm";
import PersonList from "./PersonList";
import SearchFilter from "./SearchFilter";

function App() {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    console.log("effect");
    axios
      .get("http://localhost:3001/persons")
      .then((res) => {
        console.log(res.data);
        setPersons(res.data)
      })
      .catch((err) => console.log(err))
  }, [])
  console.log("total",persons.length, "person");

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
        setPersons([...persons, {name: newName, number: newNumber}])
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
