import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    hueDegrees: 0
  };

  onClick = () => {
    this.setState({hueDegrees: this.state.hueDegrees + Math.floor(Math.random() * 360)})
  };

  render() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return (
      <div className="container" onClick={this.onClick}>
        <img
          alt='fingaz'
          className="img"
          src="https://i.imgur.com/tJImsbl.png"
          style={{
            filter: `hue-rotate(${this.state.hueDegrees}deg)`,
            paddingTop: (isMobile ? '25%' : 0)
          }}/>
      </div>
    );
  }

}

export default App;
