import React, { Component } from 'react';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        deadline: 'March 27, 2018'
      }
  }

  render() {
    return (
      <div className='app'>
        <div className='app-title'>
          Countdown to {this.state.deadline}
        </div>
        <div>
          <div className='days'>14 days</div>
          <div className='hours'>30 hours</div>
          <div className='mins'>15 minutes</div>
          <div className='secs'>20 seconds</div>
        </div>
        <div>
          <input className='input' placeholder='new date'/>
          <button type="button">Submit</button>
        </div>
      </div>
    )
  }
}

export default App;
