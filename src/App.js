import { useState } from 'react';
import './App.css';
import { FaBars, FaCloud } from 'react-icons/fa';

const api = {
  key: "f975d78f07ca044376b9a0fcb330ef89",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }




  let d = new Date()
  let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>

    <main className="App">
      <div className="App-container">
         
            <input  
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search} />
         
        
          
        {(typeof weather.main !== "undefined") ? (
           <div>
              <nav className="navbar">
                 <ul>   
                    <li>{weather.name}, {weather.sys.country}</li>
                    <li className="navbarState">{days[d.getDay()]}, {months[d.getMonth()]} {d.getDate()}</li>
                  </ul>
              </nav>

           <div className="banner">
              <div>
                 <p>{Math.round(weather.main.temp)}<span><small><sup>o</sup>C</small></span> </p>
                 <h4><FaCloud className="FaCloud"/>{weather.weather[0].main}</h4><br/>
              </div>

           <div>
            <ul>
               <li>{Math.round(weather.wind.speed)}m/s <br/> wind speed</li>
               <li>{Math.round(weather.main.humidity)}% <br/> humidity</li>
               <li>{Math.round(weather.main.pressure)}hpa <br/> pressure</li>
             </ul>
            </div>
          </div>

          </div> 
   
        ) : ('')}
      </div>
      </main>
    </div>

  );
}

export default App;
