import "./styles.css";
import Navbar from './Components/Navbar';
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React, { useState } from 'react';
import Alert from "./Components/Alert";

function App() {
  const [mode, setMode] = useState('dark'); //wheather dark mode enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
       msg:message,
       type:type
    })
    setTimeout(()=>{
      setAlert(null)},1500);
  }
  
  const toggleMode = () =>{
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor= 'grey';
    showAlert("Dark mode was enable","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode was enable","success");
    }
  }
  return (
    
    <div className="App">
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
            <Alert alert={alert}/>
            <div className="container my-3">
            <TextForm showAlert={showAlert} heading="Enter text for analyze below" mode={mode}/>
            {/* <About/> */}
            </div>
            {/* it is props */}
    </div>
    
      );
}
export default App;