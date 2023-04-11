import React from "react";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import {Routes, Route, Link} from 'react-router-dom';

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
