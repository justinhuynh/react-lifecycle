// Child.js
import React, { Component } from 'react';

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      happy: true
    };

    this.handleMoodClick = this.handleMoodClick.bind(this);
  }

  handleMoodClick() {
    let nextHappy = !this.state.happy;
    this.setState({ happy: nextHappy });
  }

  render() {
    let moodText = this.state.happy ? "happy" : "sad";

    return(
      <div>
        <h1>I am a mounted child component!</h1>
        <p>Child has been hugged {this.props.hugCount} times</p>
        <p>Child is {moodText}</p>
        <button onClick={this.handleMoodClick}>Change Child's Mood</button>
      </div>
    );
  }
}

export default Child;

