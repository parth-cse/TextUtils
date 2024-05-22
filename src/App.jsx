import { useState } from 'react';
import About from './components/About';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { 
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Routes
//  } from 'react-router-dom';



function App() {
  const [darkMode, setDarkMode] = useState('light');
  const [alert, setAlert] = useState(null)

  function showAlert(message, type){
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null);
    }, 2000);
  }
  function toogleDark(){
    if(darkMode === 'light'){
      setDarkMode('dark');
      document.querySelector('body').style.backgroundColor = 'grey';
      showAlert("Dark Mode Enabled", "success");
      document.title = "Textutils | Dark Mode";
    }else{
      setDarkMode('light');
      document.querySelector('body').style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");
      document.title = "Textutils | Light Mode";
    }
  }

  return (
    // <Router>
    <>
      <Navbar title="Textutils" aboutText="About Text" mode={darkMode} modeFun={toogleDark} />
      <Alert alert={alert} />
      {/* <Routes> */}
      <div className="container my-3" style={{color: darkMode==='dark' ? 'white' : 'black'}}>
          <TextForm mode={darkMode} alertFun={showAlert} />
        </div>
      {/* <Route exact path='/about' element={<About />} />
      </Routes>
      </Router> */}
      </>
  )
}

export default App
