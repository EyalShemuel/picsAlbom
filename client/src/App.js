import React from 'react';
/* import logo from './logo.svg';
import { Counter } from './features/counter/Counter'; */
import './App.css';
import Button from './features/baisic/Button';
import Image from './features/baisic/Image';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image 
        src='https://www.focus2move.com/wp-content/uploads/2020/01/Tesla-Roadster-2020-1024-03-696x522.jpg.webp'
        size='S'/>
      <Button 
      value = "+"
      command = 'increment()'
      />
      </header>
    </div>
  );
}

export default App;
