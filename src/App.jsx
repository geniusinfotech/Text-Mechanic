import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState('light');
  const [btnText, newbtnText]= useState('Enable Dark Mode')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message, 
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () =>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background= 'black';
      document.body.style.color= 'white';
      newbtnText("Enable Light Mode")
      showAlert("Dark Mode has been Enable", "success");
    } else {
      setMode('light');
      document.body.style.background= 'white';
      document.body.style.color= 'black';
      newbtnText("Enable Dark Mode")
      showAlert("Dark Mode has been Enable", "success");

    }
  }

  return (
    <> 
        <Navbar title="Text Mechanic" aboutText="About Us" mode= {mode} toggleMode={toggleMode}  btnText={btnText} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Repair Your Text Here" mode={mode}  showAlert={showAlert} />
      </div>
    </>
  );  
}

export default App;