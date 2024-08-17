import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [customColor, setCustomColor] = useState('#ffffff'); // Initial color white

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode has been enabled!', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = customColor; // Use custom color for light mode
      showAlert('Light mode has been enabled!', 'success');
    }
  };

  const colorChanger = (event) => {
    const selectedColor = event.target.value; // Get the color from the input
    setCustomColor(selectedColor); // Update state with the selected color
    document.body.style.backgroundColor = selectedColor; // Apply color to the entire body background
    showAlert('Background color has been changed!', 'success');
  };

  return (
    <>
      <Router>
        <Navbar colorChanger={colorChanger} title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
          </Routes>
        </div>
      </Router>    
    </>
  );
}

export default App;
