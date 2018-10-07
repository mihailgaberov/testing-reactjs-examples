import React, { Component } from 'react';
import './App.css';
import hp from '../../hp.jpg';
import ButtonWithTextInput from './ButtonWithTextInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={hp} alt="Testing ReactJS" className="App-image" />
        <ButtonWithTextInput btnLabel={'Click Me'} textInputValue={'Zurich'} />
        <footer>Presentation slides <a href="https://mihailgaberov.github.io/testing-reactjs-presentation">here</a>.</footer>
      </div>
    );
  }
}

export default App;
