import React from "react";
import { useState} from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState('null');
const showalert=(message ,type)=>{
{
  setAlert({message,type})
  setTimeout(()=>{
    setAlert('null');
  },1500)

}
}


  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
       showalert("Dark mode is enable Now","success")
      document.body.style.backgroundColor='#042743';
      document.title='TextUtils-Dark Mode';
      setInterval(() => {
        document.title='TextUtils is amazing!';
      }, 2000);
      setInterval(() => {
        document.title='Install TextUtils Now';
      }, 1500);
    }
    else{
      setmode('light');
      showalert("Light mode is enable Now","success")
      document.body.style.backgroundColor='white';
      document.title='TextUtils-Light Mode';
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" abouttext="About" mode={mode} togglemode={togglemode}/>
  <div className="container my-3">
  <Alert alert={alert}/>
  <Routes>
          <Route exact path="/about"element={<About/>}/>
            
             
          <Route  exact path="/" element={ <TextForm heading="Enter Your Text Here" mode={mode} alert={alert} showalert={showalert}/> }/>
         
            
   </Routes>
     
  
  

  </div>
  </Router>  
    </>
  );
}

export default App;
