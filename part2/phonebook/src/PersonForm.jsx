import React from 'react'

const PersonForm = ({handleSubmit, addPhoneBook, newName, handleNameChange, newNumber, handleNumberChange}) => {
    return (
        <form onSubmit={addPhoneBook}>
        <div>
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" value={ newName } onChange={handleNameChange} />
          </div>
          <div>
            <label htmlFor="phone">Number: </label>
            <input type="text" value={ newNumber } onChange={handleNumberChange} />
          </div>
        </div>
        <div><button type="submit">Add</button></div>
      </form>
    )
}

export default PersonForm
