import React, { useEffect, useState } from "react";
import "../styles/Desktop7.css";
import QRCode from 'react-qr-code'

import { useNavigate, useLocation } from "react-router-dom";

function Desktop7() {

  const [visible, setVisible] = useState(false);
  const [qrcode, setQrcode] = useState('');

  const location = useLocation();
  const user = location.state;
  // console.log(user);
  const navigate = useNavigate();

  // const onButtonClick = () => {
  //   navigate('/final', {state : {user:user, qrcode:qrcode}})
  // }

  useEffect(() => {
    if (qrcode !== '') setVisible(true);
  }, [qrcode])

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("form submiited")
    let form = e.target;
    let formData = new FormData(form);
    let formObj = Object.fromEntries(formData.entries());
    let qrValue = formObj.medicine1 + " " + formObj.quantity1 + " " + formObj.medicine2 + " " + formObj.quantity2 + " " + formObj.medicine3 + " " + formObj.quantity3 + " " + formObj.medicine4 + " " + formObj.quantity4
    // console.log(formObj);
    // console.log(qrValue);
    setQrcode(qrValue);
    // onButtonClick()
    navigate('/final', { state: { user: user, qrcode: formObj } })
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", fontSize: 16 }}>
      <div style={{ textAlign: "center" }}>
        <div class="card">
          <h1>Prescription</h1>
          <h2>Confirm Prescription and Generate QR code?</h2>
          <div class="form1">
            <form onSubmit={onFormSubmit} id="qr-generation-form">
              <div>
                <label for="medicine1">Medicine 1:</label>
                <select name="medicine1" id="medicine1">
                  <option value="Crocin">Crocin</option>
                  <option value="Dolo">Dolo</option>
                  <option value="Ceredon">Ceredon</option>
                  <option value="Cetrimide">Cetrimide</option>
                </select>
                <input
                  name="quantity1"
                  type="number"
                  id="quantity1"
                  placeholder="Quantity"
                  required
                />
              </div>
              <div>
                <label for="medicine2">Medicine 2:</label>
                <select name="medicine2" id="medicine2">
                  <option value="Crocin">Crocin</option>
                  <option value="Dolo">Dolo</option>
                  <option value="Ceredon">Ceredon</option>
                  <option value="Cetrimide">Cetrimide</option>
                </select>
                <input
                  name="quantity2"
                  type="number"
                  id="quantity2"
                  placeholder="Quantity"
                  required
                />
              </div>
              <div>
                <label for="medicine3">Medicine 3:</label>
                <select name="medicine3" id="medicine3">
                  <option value="Crocin">Crocin</option>
                  <option value="Dolo">Dolo</option>
                  <option value="Ceredon">Ceredon</option>
                  <option value="Cetrimide">Cetrimide</option>
                </select>
                <input
                  name="quantity3"
                  type="number"
                  id="quantity3"
                  placeholder="Quantity"
                  required
                />
              </div>
              <div>
                <label for="medicine4">Medicine 4:</label>
                <select name="medicine4" id="medicine4">
                  <option value="Crocin">Crocin</option>
                  <option value="Dolo">Dolo</option>
                  <option value="Ceredon">Ceredon</option>
                  <option value="Cetrimide">Cetrimide</option>
                </select>
                <input
                  name="quantity4"
                  type="number"
                  id="quantity4"
                  placeholder="Quantity"
                  required
                />
              </div>
              <button class="button" type="submit">
                Generate QR Code
              </button>
            </form>
          </div>
          {/* <div id="qr-code" class="card">
            {visible && <QRCode value={qrcode} />}
          </div> */}
          {/* <div class="auto-group-jvwy-YqB">
            <button
              // class="add-medicine-PL1"
              role="button"
              onClick={onFormSubmit}
            >
              Generate Prescription
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Desktop7;
