import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Login.css";
import "../styles/transition.css";

import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Initialize Firebase app
const firebaseConfig = {
  apiKey: "AIzaSyD0Rf6k6zTb9rSPT3YZErwA62ACKQ_Fujk",
  authDomain: "mvm11-b9acf.firebaseapp.com",
  projectId: "mvm11-b9acf",
  storageBucket: "mvm11-b9acf.appspot.com",
  messagingSenderId: "774242506500",
  appId: "1:774242506500:web:abfece9c1dbe16ab3a6251",
  measurementId: "G-CVWEREHPH6"
};

const firebaseApp = initializeApp(firebaseConfig);

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(firebaseApp);

  const onButtonClick = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Show success alert
      alert("Login successful!");
      navigate("/Home");
    } catch (error) {
      // Show error alert
      alert(error.message);
      console.error(error.message);
    }
  };

  const onSignUp = () => {
    navigate("/signup");
  };

  const getTransitionClass = () => {
    if (location.state && location.state.transition === "fade") {
      return "transition";
    }
    return "";
  };

  return (
    <div className={`login-page ${getTransitionClass()}`} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", fontSize: 16 }}>
      <div className="login-card">
        <center>
          <h1 style={{ color: "#3f51b5", display: "block", fontSize: "2em", marginBlockStart: "0.67em", marginBlockEnd: "0.67em" }}>LOGIN</h1>
        </center>
        <form>
          <div className="login-container">
            <label>Username :</label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password :</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
        <p>Don't have an account <a className="signupBTN" onClick={onSignUp}>Register</a></p>
        <form onSubmit={onButtonClick}>
          <button
            className="login-button"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
