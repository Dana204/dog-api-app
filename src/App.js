import { Fragment, useState } from 'react';
import './App.css';
import Card from './components/Card/Card'
import Header from './components/Header/Header';
import Dogs from './components/Dogs/Dogs';

function App() {
  const [newName, setNewName] = useState('Barkavelli');
 
  const editNameHandler = (name) => {
    const nameData = {
      ...name
    };
    console.log(nameData);
    setNewName(nameData.name);
  }
  return (
    <Card>
      <Header onEditName={editNameHandler} 
      pname={newName}
      />
     <Dogs />
    </Card>
  );
}

export default App;
