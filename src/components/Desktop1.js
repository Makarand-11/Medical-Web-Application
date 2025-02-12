import React from "react";
import "../styles/Desktop1.css";
import Img from "../images/image-4.png";

import { useNavigate } from "react-router-dom";

function Desktop1() {

  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate('/desktop2')
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div class="desktop-1-e6Z">
        {/* <div class="auto-group-hpyd-BsB">
        <img
          class="arrowforwardiosfill0wght400grad0opsz48-1-3-XAM"
          src={Image}
        />
      </div> */}
        <div class="auto-group-xhh7-Qjw">
          <img class="image-4-jGR" src={Img} />
          <p class="patient1-rbw">Patient1</p>
          <p class="patient1gmailcom-ygZ">patient1@gmail.com</p>
          <div class="auto-group-fyk3-uaD">
            <button style={{ backgroundColor: "#3f51b5" }} class="button-1" onClick={onButtonClick}>
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desktop1;
