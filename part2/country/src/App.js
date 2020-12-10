import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = "http://api.weatherstack.com";
const api_key = process.env.REACT_APP_API_KEY

function App() {
  const [countries, setCountrie] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [showCountry, setShowCountry] = useState(false)
  const [weatherCountry, setWeatherCountry] = useState("")
  const [singleWearther, setSingleWeather] = useState("Dhaka")


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

  console.log("show", showCountry);

  const searchResult =  countries
                        .filter((country) => country.name.toLocaleLowerCase()
                        .includes(searchTerm.toLocaleLowerCase())); 

  
  const handleShowCountry = (nam) => {
    const show = searchResult.filter((sname, index) => sname.name === nam)
    setCountrie(show)
    setSingleWeather(show[0].name)
    setShowCountry(true)

   
  } 

  
  useEffect(() => {
    axios
      .get(`${baseUrl}/current?access_key=${api_key}&query=${singleWearther}`)
      .then((response) => {
        setWeatherCountry(response.data)

      })
      .catch((err) => console.log(err))
  },[singleWearther])

  



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
              <h3>Weather in <b>{ weatherCountry.location.name }</b></h3>
              <h4><b>Temparature: </b> {weatherCountry.current.temperature} Celcius </h4>
              <img src={weatherCountry.current.weather_icons} alt=""/>
              <p><b>{ weatherCountry.current.wind_speed } </b> mph direction <b>{ weatherCountry.current.wind_dir }</b></p>
              </div> );
            })
          }
        </div>
        :searchResult.map((search, index) => {
          return ( <div key={index}>
          <p>{search.name} <button onClick = {() => handleShowCountry(search.name)} >show</button> </p>
          </div> );
        })
      }
    </div>
  );
}

export default App;
