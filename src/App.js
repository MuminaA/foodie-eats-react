import React from "react";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import {Routes, Route, useNavigate} from 'react-router-dom';

function App() {

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
