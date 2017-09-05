import React, { Component } from 'react';
import './app.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      mins: 0,
      secs: 0
    }
  }

    render() {
      return (
        <div>
          <div className='counter-days'>{this.state.days}days</div>
          <div className='counter-hours'>{this.state.hours}hours</div>
          <div className='counter-mins'>{this.state.mins}minutes</div>
          <div className='counter-secs'>{this.state.secs}seconds</div>
        </div>
      )
  }
}

export default Counter;
