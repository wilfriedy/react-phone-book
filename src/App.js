import './App.css';
import FormInputs from './Components/FormInputs';
import React, {useState} from 'react';
import Lists from './Components/Lists';

function App() {

  const [newContact, setContact] = useState([])
  const getNewContact = (arr)=>{
      setContact(prev => [...prev, arr])

  }
  // console.log(newContact)
  return (
    <div className="App">
      <header className="App-header">
        <FormInputs getContact = {getNewContact}/>
        <Lists contactList = {newContact} />
      </header>
    </div>
  );
}

export default App;
