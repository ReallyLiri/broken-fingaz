import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    hueDegrees: 0
  };

  onClick = () => {
    this.setState({hueDegrees: this.state.hueDegrees += Math.floor(Math.random() * 360)})
  };

  render() {
    return (
      <div className="container" style={{width: window.screen.width, height: window.screen.height}} onClick={this.onClick}>
        <img className="img" src="https://i.imgur.com/TJisDte.png" style={{filter: `hue-rotate(${this.state.hueDegrees}deg)`}}/>
      </div>
    );
  }

}

export default App;
