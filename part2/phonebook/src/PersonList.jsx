import React from 'react';

const PersonList = ({ searchResults, persons }) => {
    return (
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
    )
}

export default PersonList
