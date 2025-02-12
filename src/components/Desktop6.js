import React from "react";
import '../styles/Desktop6.css'
import Back from "../images/arrowforwardiosfill0wght400grad0opsz48-1-6-88m.png"
import Profile from "../images/image-8-q2M.png"
import Edit from "../images/editfill1wght400grad0opsz48-1-qsb.png"

function Desktop6() {
  return (
    <div class="desktop-6-N1T">
      <div class="auto-group-x4nq-hpR">
        <img
          class="arrowforwardiosfill0wght400grad0opsz48-1-6-2rh"
          src={Back}
        />
      </div>
      <div class="auto-group-mdmx-jm7">
        <div class="auto-group-fb25-rqj">
          <div class="auto-group-m5xq-Pqf">
            <p class="prescription-3-w6V">Prescription 3</p>
            <p class="patient1-rz9">Patient1</p>
            <p class="date-23-10-2023-zqT">Date: 23-10-2023</p>
            <p class="prescription-Y6H">Prescription</p>
          </div>
          <img class="image-8-fgh" src={Profile} />
        </div>
        <div class="auto-group-tvmf-cM3">
          <div class="auto-group-niuk-vcd">
            <div class="auto-group-d3ro-pi1">
              <p class="azithromycin-1-strip-mt9">Azithromycin (1 Strip)</p>
              <img
                class="editfill1wght400grad0opsz48-1-JNH"
                src={Edit}
              />
            </div>
            <div class="auto-group-izm3-DEM">
              <p class="time-of-dosage-noon-night-9Nu">
                Time of dosage: Noon, Night
              </p>
              <p class="repeat-everyday-f6M">Repeat: Everyday</p>
              <p class="to-be-taken-after-eating-fEm">
                To be taken: After eating
              </p>
            </div>
          </div>
        </div>
        <div class="component-3-AMs">
          <p class="add-medicine-dWM">
            <a href="prescription.html">Add Medicine</a>
          </p>
        </div>
      </div>
      <div>
        <button
          class="button-1"
          role="button"
          onclick="window.location.href='desktop-7.html';"
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default Desktop6;
