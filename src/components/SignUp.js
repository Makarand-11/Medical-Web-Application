import React, { useState } from "react";
import "../styles/SignUp.css";
import "../styles/transition.css"
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app"; // Import firebase
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth"; // Import authentication module

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD0Rf6k6zTb9rSPT3YZErwA62ACKQ_Fujk",
  authDomain: "mvm11-b9acf.firebaseapp.com",
  projectId: "mvm11-b9acf",
  storageBucket: "mvm11-b9acf.appspot.com",
  messagingSenderId: "774242506500",
  appId: "1:774242506500:web:abfece9c1dbe16ab3a6251",
  measurementId: "G-CVWEREHPH6"
};

// Initialize Firebase app
firebase.initializeApp(firebaseConfig);

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth(); // Get the authentication instance

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Send email verification
      await sendEmailVerification(auth.currentUser);

      // User signed up successfully
      console.log('User signed up successfully:', userCredential.user);
      console.log('Verification email sent to:', email);

      // Show success alert
      window.alert('Account created successfully! Please check your email for verification.');

      // Redirect to Login page with transition effect
      navigate("/login", { state: { transition: "fade" } });
    } catch (error) {
      // Handle errors
      console.error('Error signing up:', error.message);
      // Show error alert
      window.alert('Error: ' + error.message);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", fontSize: 16 }}>
      <div className="login-card">
        <center>
          <h1 style={{ color: "#3f51b5", display: "block", fontSize: "2em", marginBlockStart: "0.67em", marginBlockEnd: "0.67em" }}>REGISTER</h1>
        </center>
        <form>
          <div className="login-container">
            <label>Email-ID :</label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Password :</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </form>
        <button className="SignUpButton" onClick={handleSignUp}>Register</button>
      </div>
    </div>
  );
}

export default SignUp;
