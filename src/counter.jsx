import React, { Component } from 'react';
import './app.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentWillMount(deadline) {
    this.countdownUntil(this.props.deadline)
  }

  componentDidMount(deadline) {
    setInterval(() => this.countdownUntil(this.props.deadline), 1000)
  }

  leadingZero(num) {
    if (num < 10) {
      return num + '0'
    }
    return num
  }

  countdownUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const days = Math.floor(time/(1000*60*60*24));
    const hours = Math.floor(time/(1000*60*60) % 24);
    const minutes = Math.floor((time/1000/60) % 60);
    const seconds = Math.floor((time/1000) % 60);

    this.setState({days, hours, minutes, seconds});
  }

    render() {
      return (
        <div>
          <div className='counter-days'>{this.leadingZero(this.state.days)} days</div>
          <div className='counter-hours'>{this.leadingZero(this.state.hours)} hours</div>
          <div className='counter-mins'>{this.leadingZero(this.state.minutes)} minutes</div>
          <div className='counter-secs'>{this.leadingZero(this.state.seconds)} seconds</div>
        </div>
      )
  }
}

export default Counter;
