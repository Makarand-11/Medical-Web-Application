import React from "react";
import '../styles/Desktop5.css'
import Back from "../images/arrowforwardiosfill0wght400grad0opsz48-1-6-Ked.png"
import Plus from "../images/vector-sRX.png"

function Desktop5() {
  return (
    <div class="desktop-5-FFK">
      <div class="auto-group-bnrb-PsK">
        <img
          class="arrowforwardiosfill0wght400grad0opsz48-1-6-vcM"
          src={Back}
        />
      </div>
      <div class="auto-group-fatf-dmf">
        <div class="auto-group-kecd-NUM">
          <p class="calpol-500-thb">Azithromycine</p>
          <div class="line-3-PPT"></div>
          <p class="strip-WU5">1 Strip</p>
          <img class="vector-EQ5" src={Plus} />
        </div>
        <p class="time-of-dosage-BKK">Time of dosage</p>
        <p class="repeat-h2m">Repeat</p>
        <div class="auto-group-3myf-QSy">
          <input type="checkbox" id="repeat1" name="repeat1" value="everday" />
          <label for="vehicle1">
            <h1>Everyday</h1>
          </label>
          <br />
          <input
            type="checkbox"
            id="repeat2"
            name="repeat2"
            value="alternate"
          />
          <label for="vehicle2">
            <h1>Alternate Days</h1>
          </label>
          <br />
        </div>
        <div class="auto-group-h8bw-otR">
          <input type="checkbox" id="repeat1" name="repeat1" value="everday" />
          <label for="vehicle1">
            <h1>Before Eating</h1>
          </label>
          <br />
          <input
            type="checkbox"
            id="repeat2"
            name="repeat2"
            value="alternate"
          />
          <label for="vehicle2">
            <h1>After Eating</h1>
          </label>
          <br />
        </div>
        <p class="to-be-taken-t2h">To be taken</p>
        <div class="auto-group-sktt-C3P">
          <input type="checkbox" id="time1" name="time1" value="morning" />
          <label for="vehicle1">
            <h1>Morning</h1>
          </label>
          <br />
          <input type="checkbox" id="time2" name="time2" value="afternoon" />
          <label for="vehicle2">
            <h1>Afternoon</h1>
          </label>
          <br />
          <input type="checkbox" id="time3" name="time3" value="evening" />
          <label for="vehicle3">
            <h1>Evening</h1>
          </label>
          <br />
          <input type="checkbox" id="time4" name="time4" value="night" />
          <label for="vehicle3">
            <h1>Night</h1>
          </label>
          <br />
        </div>
      </div>
      <div>
        <button
          class="button-1"
          role="button"
          onclick="window.location.href='desktop-6.html';"
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default Desktop5;
