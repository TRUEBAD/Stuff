import React from 'react';
import logo from './logo.svg';
import './App.css';
import Equalizer from './components/Equalizer'

class App extends React.Component {
  
 
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <Equalizer />
        
        <p>
          Calculator of DEATH
        </p>
        <a
          className="App-link"
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google
        </a>
      </header>
    </div>
  );
}
}
export default App;
