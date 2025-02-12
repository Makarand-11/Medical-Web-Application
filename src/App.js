import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Final from "./components/Final";
import Home from "./components/Home";
// import First from "./components/First";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Desktop1 from "./components/Desktop1";
import Desktop2 from "./components/Desktop2";
import Desktop5 from "./components/Desktop5";
import Desktop6 from "./components/Desktop6";
import Desktop7 from "./components/Desktop7";
import Desktop11 from "./components/Desktop11";
import Desktop13 from "./components/Desktop13";
import Prescription from "./components/Prescription";
import SignUp from "./components/SignUp";
import firebase from 'firebase/app'; // Import Firebase
import 'firebase/database';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='signup' element={<SignUp />} />
          <Route path='/' element={<LandingPage />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/final' element={<Final />} />
          {/* <Route path='/first' element={<First />} /> */}
          <Route path='/desktop1' element={<Desktop1 />} />
          <Route path='/desktop2' element={<Desktop2 />} />
          <Route path='/prescription' element={<Prescription />} />
          <Route path='/desktop5' element={<Desktop5 />} />
          <Route path='/desktop6' element={<Desktop6 />} />
          <Route path='/desktop7' element={<Desktop7 />} />
          <Route path='/desktop11' element={<Desktop11 />} />
          <Route path='/desktop13' element={<Desktop13 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
