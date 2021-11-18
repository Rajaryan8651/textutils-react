
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert=(message,type)=>{
      setAlert({
        msg: message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1000);
    }


    const toggleMode = () =>{
      if(mode === `light`){
        setMode('dark');
        document.body.style.backgroundColor =`#13536b`;
        showAlert("Dark mode has been enabled","success");
        document.title ="textutils - Dark Mode"
      //   setInterval(() => {
          
      //     document.title ="textutils -is amazing"
      //   }, 2000);
      //   setInterval(() => {
          
      //     document.title ="install texutilst"
      //   }, 2500);
      }
      
      else{
        setMode('light');
        document.body.style.backgroundColor =`white`;    
        showAlert("light mode has been enabled","success");
        document.title ="textutils - light Mode"
        }
      }
    const redmode= () =>{
      if(mode === `light`){
        setMode('dark');
        document.body.style.backgroundColor =`#dc3545`;
        showAlert("Red mode has been enabled","success");
      }
      else{
       
              setMode('light');
              document.body.style.backgroundColor =`white`;    
              showAlert("light mode has been enabled","success");
              
        
        }
      
      }
    const greenmode= () =>{
      if(mode === `light`){
        setMode('dark');
        document.body.style.backgroundColor =`rgb(47 185 38)`;
        showAlert("green mode has been enabled","success");
      }
        else{
          setMode('light');
          document.body.style.backgroundColor =`white`;    
          showAlert("light mode has been enabled","success");
          }
          
      }

  return (
    <>
    {/* <Router> */}
   
              {/* <Navbar title="Textutils" abouttext="About Textutils"/> */}
              {/* <Navbar /> */}
              <Navbar title="Textutils" aboutText="About"  mode={mode} toggleMode={toggleMode} redmode={redmode} greenmode={greenmode}/>
              <Alert  alert={alert}/>
                
              
         <div className="container my-3">
         {/* <Switch>
              <Route exact path="/about">
                <About />
              </Route>
             
              <Route exact path="/">
              </Route>
            </Switch> */}
            <Textform showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/>
         </div>

        {/* </Router> */}

    </>
  );
}

export default App;
