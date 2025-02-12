import React from 'react'
import Back from "../images/arrowforwardiosfill0wght400grad0opsz48-1-6-QCu.png"
import '../styles/Desktop2.css'

function Prescription() {
  return (
    <div>
      <div class="desktop-2-ZH7">
        <div class="auto-group-ryid-JEh">
          <img class="arrowforwardiosfill0wght400grad0opsz48-1-6-pyj" src={Back} />
        </div>
      </div>
      <br />
      <div class="dropdown">
        <button onclick="myFunction()" class="dropbtn">Select Medicine</button>
        <div id="myDropdown" class="dropdown-content">
          <input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()" />
          <a href="desktop-5.html">Azithromycine</a>
          <a href="#about">Calpol 500</a>
          <a href="#blog">Dolo 650</a>
          <a href="#contact">Meftal 500</a>
        </div>
      </div>
    </div>
  )
}

export default Prescription