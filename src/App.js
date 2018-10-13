import React, { Component } from 'react';
// import background1 from './Img/background1.jpg'
// import background2 from './Img/background2.jpg'
// import background3 from './Img/background3.jpg'
// import background4 from './Img/background4.jpg'
// import mainBackground from './Img/main-background.jpg'
import './App.css';

let tapped1 = false;
let tapped2 = false;
let tapped3 = false;
let tapped4 = false;

class App extends Component {

  backgroundOne() {
    if (tapped1) {
      document.body.style.backgroundColor = "black"
      tapped1 = false;
    } else {
      tapped1 = true;
      tapped2 = false;
      tapped3 = false;
      tapped4 = false;
      document.body.style.backgroundColor = "red"
    }
    console.log("Button 1");
  }

  backgroundTwo() {
    if (tapped2) {
      document.body.style.backgroundColor = "black"
      tapped2 = false;
    } else {
      tapped1 = false;
      tapped2 = true;
      tapped3 = false;
      tapped4 = false;
      document.body.style.backgroundColor = "blue"
    }
    console.log("Button 2");
  }

  backgroundThree() {
    if (tapped3) {
      document.body.style.backgroundColor = "black"
      tapped3 = false;
    } else {
      tapped1 = false;
      tapped2 = false;
      tapped3 = true;
      tapped4 = false;
      document.body.style.backgroundColor = "yellow"
    }
    console.log("Button 3");
  }

  backgroundFour() {
    if (tapped4) {
      document.body.style.backgroundColor = "black"
      tapped4 = false;
    } else {
      tapped1 = false;
      tapped2 = false;
      tapped3 = false;
      tapped4 = true;
      document.body.style.backgroundColor = "Green"
    }
    console.log("Button 4");
  }

  render() {
    return (
      <div className="grid-container">
        <button onClick={this.backgroundOne} className="buttonOne">Click Me!</button>
        <button onClick={this.backgroundTwo} className="buttonTwo">Click Me!</button>
        <button onClick={this.backgroundThree} className="buttonThree">Click Me!</button>
        <button onClick={this.backgroundFour} className="buttonFour">Click Me!</button>
      </div>
    );
  }
}

export default App;
