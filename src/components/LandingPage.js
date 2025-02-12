import React from "react";
import "../styles/LandingPage.css";

import { useNavigate } from "react-router-dom";

function LandingPage() {

  const navigate = useNavigate();

  const onButtonClick = (e) => {
    e.preventDefault();
    // console.log('Makarand')
    navigate('/login')
  }

  return (
    <div style={{ display: "flex" }}>
      <div style={{ padding: "31rem" }} class="landing-page-Q1s">
        <p class="pharmeasy-6fP">PharmEasy</p>
        <button
          class="button-1"
          role="button"
          onClick={(e) => onButtonClick(e)}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
