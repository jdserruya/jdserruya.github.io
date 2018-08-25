import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import TextComponent from './Components/TextComponent';

const particlesOptions = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className="Particles" params={particlesOptions}/>
        <TextComponent />
      </div>
    );
  }
}

export default App;
