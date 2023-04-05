import React from "react";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import {Routes, Route, useNavigate} from 'react-router-dom';

function App() {
  // const navigate = useNavigate();

  // const navigateToSignup = () => {
  //   navigate('/Signup');
  // };

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
