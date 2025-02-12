import React from "react";
import '../styles/Home.css'

import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate('/desktop1')
  }

  return (
    <div className="main-container">
      {/* <!-- Navigation Bar --> */}
      {/* <div class="navbar">
        <a href="#">Home</a>
        <a href="patients-record.html">Patients Record</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div> */}

      {/* <!-- Main Content --> */}
      <div class="container">
        <h1>Welcome to Patients Record System</h1>
        <button class="add-patient-btn" onClick={onButtonClick}>
          Add Patient
        </button>
      </div>
    </div>
  );
}

export default Home;
