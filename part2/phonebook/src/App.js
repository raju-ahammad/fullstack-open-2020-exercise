import { useEffect, useState } from "react";
import PersonForm from "./PersonForm";
import PersonList from "./PersonList";
import phonebookServce from "./phonebookService";
import SearchFilter from "./SearchFilter";


function App() {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
       phonebookServce
       .getAll()
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
  console.log("search result: ", searchResults);


  const addPhoneBook = (event) => {
    event.preventDefault();

    const newObj = {
      name : newName,
      number: newNumber,
      id : persons.length + 1
    }
    console.log(newObj.name);
    phonebookServce
    .create(newObj)
    .then((res) => {
      console.log("adding data: ",res.data);
      setPersons(persons.concat(res.data))
      setNewName("")
      setNewNumber("")
    })
    .catch((err) => console.log(err))
  }

  const deleteHandle = (id) => {
    phonebookServce
      .deleteItem(id)
      .then((res)=> {
        console.log("delete item:", res.data);
        setPersons(persons.filter((person) => person.id !== id))
      })
      .catch((err)=>console.log(err))
  };

  const updateNumber = () => {
    const updateName = persons.find(p => p.name === newName)
    const updateObj = {
      ...updateName,
      number: newNumber
    }
    phonebookServce
    .update(updateObj.id, updateObj)
    .then((res) => {
      alert(`${res.name} is the already added to phonebook , replace the phone number`)
      setPersons(persons.map(person => person.id === res.id  ? res : person))
    })
  }

  return (
    <div className="">
      <h2>PhoneBook</h2>
      <SearchFilter searchHandle={searchHandle} searchTerm={searchTerm} />
      <h2>Added new phone list</h2>
      <PersonForm  
            handleSubmit = {handleSubmit}  
            newName= {newName} 
            handleNameChange={handleNameChange} 
            newNumber={newNumber} 
            addPhoneBook = {addPhoneBook}
            handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <PersonList searchResults={searchResults} deleteHandle={ deleteHandle } persons={persons} />
    </div>
  );
}

export default App;
