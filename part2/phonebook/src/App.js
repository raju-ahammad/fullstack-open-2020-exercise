import { useState } from "react";

function App() {
  const [persons, setPersons] = useState([{name: "Raju Ahammad"}])
  const [newName, setNewName] = useState("")


  const handlePersonChange = (e) => {
    setNewName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName === "") {
      return alert("value is empty")
    }
    persons.forEach((person) => {
      if (person.name === newName){
        return alert(`${person.name} is already added to phonebook `)
      }else{
        setPersons([...persons, {name: newName}])
        setNewName("")
      }
    })
    
    
  }

  return (
    <div className="">
      <h2>PhoneBook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" value={ newName } onChange={handlePersonChange} />
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div> {newName} </div>
      <div>
        {
          persons.map((person, index) => {
            return (
              <div key={index}>
                <p> {index + 1 }. { person.name }</p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default App;
