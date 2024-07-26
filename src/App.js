import './App.css';
import Navbar from "./components/Navbar";
import Portion from './components/Portion';
import About from './components/About';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setTheme("light");
      document.body.style.backgroundColor = "white";
    }
    console.log("Theme is changed");
  };

  return (
    <Router>
      <Navbar title='TextManipulation' theme={theme} handleTheme={handleTheme} />
      <main className='container my-4'>
        <Routes>
          <Route path='/' element={<Portion title="Enter your text here...." theme={theme} />} />
          <Route path='/about' element={<About theme = {theme}/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
