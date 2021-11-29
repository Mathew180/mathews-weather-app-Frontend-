import React from 'react';
import './App.css';
import { FaBars, FaCloud } from 'react-icons/fa';

function App() {
  let d = new Date()
  let days = ["Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  return (
    <div className="App">
      <div className="App-container">
          <form>
            <input placeholder="Search State"></input>
            <FaBars className="Fabars"/>
          </form>

          <nav className="navbar">
              <ul>   
                <li className="navbarState">Canada</li>
                <li>{days[d.getDay()]}, {months[d.getMonth()]} {d.getDate()}th</li>
              </ul>
          </nav>

          <banner className="banner">
             <div>
             <p>4<span><small><sup>o</sup>C</small></span><br/> </p>
              <h4><FaCloud className="FaCloud"/>LIGHT RAIN</h4><br/>
             </div>
           <div>
            <ul>
               <li>2.94m/s <br/> wind speed</li>
               <li>50% <br/> humidity</li>
               <li>1016hpa <br/> pressure</li>
             </ul>
            </div>
          </banner>

          <footer className="footer">
          
          </footer>
      </div>
    </div>
  );
}

export default App;
