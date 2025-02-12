import React from "react";
import '../styles/Desktop25.css'
import Profile from '../images/image-8.png'
import Arrow from "../images/arrowforwardiosfill0wght400grad0opsz48-1-6-8jF.png"
import Arrow2 from "../images/arrowforwardiosfill0wght400grad0opsz48-1-7.png"

function First() {
  return (
    <div class="desktop-25-qLy">
      <p class="patients-record-8qs">Patients Record</p>
      <div class="auto-group-eoem-eZK">
        <div class="auto-group-2ysm-yLh">
          <img class="image-8-Gah" src={Profile} />
          <div class="auto-group-t2qd-CjF">
            <p class="patient1gmailcom-YYD">patient1@gmail.com</p>
            <p class="last-appointment-23-10-2023-3js">
              Last Appointment: 23-10-2023{" "}
            </p>
            <p class="view-details-wKT">View Details</p>
            <p class="patient1-T2u">Patient1</p>
            <img
              class="arrowforwardiosfill0wght400grad0opsz48-1-6-ymw"
              src={Arrow}
            />
          </div>
        </div>
        <div class="auto-group-xozo-qZF">
          <div class="rectangle-16-nDb"></div>
          <p class="patient2gmailcom-Vdo">patient2@gmail.com</p>
          <p class="last-appointment-03-08-2023-Qkm">
            Last Appointment: 03-08-2023{" "}
          </p>
          <p class="view-details-Woo">View Details</p>
          <p class="patient2-dNd">Patient2</p>
          <img
            class="arrowforwardiosfill0wght400grad0opsz48-1-7-Z1P"
            src={Arrow2}
          />
          <div class="image-10-rmB"></div>
        </div>
      </div>
      <div class="auto-group-j7yo-kLm">
        <div class="auto-group-j88d-6fX">
          <div class="rectangle-17-23P"></div>
          <p class="patient3gmailcom-YGd">patient3@gmail.com</p>
          <p class="last-appointment-20-07-2023-eqT">
            Last Appointment: 20-07-2023{" "}
          </p>
          <p class="view-details-AJ1">View Details</p>
          <p class="patient3-4eH">Patient3</p>
          <img
            class="arrowforwardiosfill0wght400grad0opsz48-1-8-ABX"
            src={Arrow}
          />
          <div class="image-13-fty"></div>
        </div>
        <div class="auto-group-kb1o-Yxm">
          <div class="rectangle-18-VND"></div>
          <p class="patient4gmailcom-pvH">patient4@gmail.com</p>
          <p class="last-appointment-10-07-2023-k3F">
            Last Appointment: 10-07-2023{" "}
          </p>
          <p class="view-details-FEu">View Details</p>
          <p class="patient4-Acm">Patient4</p>
          <img
            class="arrowforwardiosfill0wght400grad0opsz48-1-9-gb7"
            src={Arrow}
          />
          <div class="image-14-oQq"></div>
        </div>
      </div>
    </div>
  );
}

export default First;
