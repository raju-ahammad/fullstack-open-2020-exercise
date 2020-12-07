import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [countries, setCountrie] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        console.log(res.data)
        setCountrie(res.data)
      })
      .catch((err) => console.log(err))
  }, [])
  console.log("Total", countries.length, "Countries");

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value)
  }
  console.log(searchTerm);

  const searchResult =  countries
                        .filter((country) => country.name.toLocaleLowerCase()
                        .includes(searchTerm.toLocaleLowerCase())); 
console.log("search:",searchResult.length);

  return (
    <div className="App">
      <div>
        find country <input value={searchTerm} onChange ={handleSearchTerm} type="text"/>
      </div>
      {
        !searchTerm ? <div></div> :
        searchResult.length > 10 
        ?<div>Too many matches, specify another filter</div>
        : searchResult.length < 2 
        ?<div>
          {
            searchResult.map((country, index) => {
              return ( <div key={index}>
                <h3>{country.name}</h3>
                <p>Capital : { country.capital } </p>
                <p>Population: {country.population} </p>
              <p>language 
                {
                country.languages.map((lang, index) => { 
                  return <div key={index}> <li> { lang.name } </li> </div> 
                }) 
                }
              </p>
                <img src={country.flag} alt=""/>
              </div> );
            })
          }
        </div>
        :searchResult.map((search, index) => {
          return ( <div key={index}>
              <p>{search.name} </p>

          </div> );
        })
      }
    </div>
  );
}

export default App;
