import { useState } from 'react';
import './App.css';
import { FaBars, FaCloud } from 'react-icons/fa';

const api = {
  key: "29bb7e14d66b7dca69869864f039d44d",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [queryS, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [state, setState] = useState('tamilnadu');

 const search = evt => {
   if (evt.key === "Enter"){
     fetch(`${api.base}weather?q=${state}&units=metric&APPID=${api.key}`)
     .then(res => res.json())
     .then(result => {
       setWeather(result)
       setQuery('')

       console.log(result)
     })
   }
 }



  let d = new Date()
  let days = ["Sun", "Monday", "Tuesday", "Wednesday", "Thurs", "Friday", "Saturday"]
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Dec"]

  return (
    <div className="App">
      <div className="App-container">
          <form>
            <input placeholder="Search State"  
             value={queryS}
             onChange={e => setQuery(e.target.value)}
             onKeyPress={search} />
         
          </form>

        {(typeof weather.main !== "undefined") ? (
           <div>
                      <nav className="navbar">
              <ul>   
                <li>{weather.name}, {weather.sys.country}</li>
                <li className="navbarState">{days[d.getDay()]}, {months[d.getMonth()]} {d.getDate()}th</li>
              </ul>
          </nav>

          <div className="banner">
             <div>
             <p>{Math.round(weather.main.temp)}<span><small><sup>o</sup>C</small></span> </p>
              <h4><FaCloud className="FaCloud"/>LIGHT RAIN</h4><br/>
             </div>

           <div>
            <ul>
               <li>2.94m/s <br/> wind speed</li>
               <li>50% <br/> humidity</li>
               <li>1016hpa <br/> pressure</li>
             </ul>
            </div>
          </div>

          <footer className="footer">
          
          </footer>
          </div> 
   
        ) : ('')}
      </div>
      
    </div>
  );
}

export default App;
