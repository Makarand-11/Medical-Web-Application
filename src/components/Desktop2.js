import React, { useState } from "react";
import '../styles/Desktop2.css'
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0Rf6k6zTb9rSPT3YZErwA62ACKQ_Fujk",
  authDomain: "mvm11-b9acf.firebaseapp.com",
  projectId: "mvm11-b9acf",
  storageBucket: "mvm11-b9acf.appspot.com",
  messagingSenderId: "774242506500",
  appId: "1:774242506500:web:abfece9c1dbe16ab3a6251",
  measurementId: "G-CVWEREHPH6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function Desktop2() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    contact: ''
  });

  const onInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onButtonClick = () => {
    navigate('/desktop7', { state: formData })
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    set(ref(db, 'user/' + formData.name), {
      username: formData.name,
      age: formData.age,
      email: formData.email,
      contactnumber: formData.contact
    })
      .then(() => {
        alert("Profile Updated!");
        //   setFormData({
        //     name: '',
        //     age: '',
        //     email: '',
        //     contact: ''
        //   });
      })
      .catch(error => {
        console.error('Error pushing data to Firebase:', error);
      });
  };

  return (
    <div className="desktop-2-ZH7">
      <div className="auto-group-lpmt-w2m">
        <div className="auto-group-rifo-r9j">
          <div className="desktop2-container">
            <h2>Fill in the Form</h2>
            <form id="myForm" onSubmit={onFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={onInputChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" value={formData.age} onChange={onInputChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={onInputChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="contact">Contact Number:</label>
                <input type="tel" id="contact" name="contact" value={formData.contact} onChange={onInputChange} required />
              </div>
              <div className="form-group">
                <input type="submit" value="Submit" id="submit" onClick={onFormSubmit} />
              </div>
            </form>
          </div>
          <div className="prescription_1">
            <p className="prescription-HPT">PRESCRIPTION</p>
          </div>
        </div>
      </div>
      <div className="auto-group-jvwy-YqB">
        <button className="add-medicine-PL1" onClick={onButtonClick}>
          Add Medicine
        </button>
      </div>
    </div>
  );
}

export default Desktop2;
