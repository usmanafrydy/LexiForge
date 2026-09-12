import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App() {
  const [darkMode, setDarkMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleDarkMode = () => {
    if (darkMode === "light") {
      setDarkMode('dark');
      document.body.style.backgroundColor = '#000000';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <Router>
      <NavBar title="TextUtils" mode={darkMode} toggleMode={toggleDarkMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route 
            path="/" 
            element={<TextForm heading="TextUtils TEXT Area" mode={darkMode} showAlert={showAlert} />} 
          />
          <Route 
            path="/about" 
            element={<About mode={darkMode} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;