
import React, { Component } from 'react';
import Counter from './counter'
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        deadline: 'March 27, 2018',
        newDeadline: ''
      }
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline})
  }

  render() {
    return (
      <div className='app'>
        <div className='app-title'>
          Countdown to {this.state.deadline}
        </div>
        <Counter
          deadline={this.state.deadline}
        />
        <div>
          <input
            className='input'
            onChange={event => this.setState({newDeadline: event.target.value})}
            placeholder='new date'
          />
          <button
            type="button"
            onClick={() => this.changeDeadline()}>
            Submit
          </button>
        </div>
      </div>
    )
  }
}

export default App;
