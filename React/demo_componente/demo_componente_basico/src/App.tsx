import './App.css'
import React from 'react';
import {MeuBotao} from './components/MeuBotao';

function App() {

  const handleClick = (event:React.MouseEvent) => {
      alert(`Clicou ${event.currentTarget.id}`); 
  };

  return (
    <div id= 'divApp' onClick={handleClick}>
     <MeuBotao/>
    </div>
  );
}

export default App;
