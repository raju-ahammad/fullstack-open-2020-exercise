import React from 'react';

const PersonList = ({ searchResults, persons, deleteHandle }) => {
    return (
        <div>
        {
           searchResults.map((search, index) => {
            return (
              <div key={index}>
                <p> {index + 1 }. { search.name } {search.number}
                  <button onClick={()=> deleteHandle(search.id)}>delete</button>  
                </p>
              </div>
            );
          })
        } 
          
      </div>
    )
}

export default PersonList
