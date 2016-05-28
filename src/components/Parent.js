// Parent.js
import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childMounted: false,
      hugCount: 0
    };

    this.handleMountClick = this.handleMountClick.bind(this);
    this.handleHugClick = this.handleHugClick.bind(this);
  }

  handleMountClick() {
    let nextChildMounted = !this.state.childMounted;
    this.setState({ childMounted: nextChildMounted });
  }

  handleHugClick() {
    let nextHugCount = this.state.hugCount + 1;
    this.setState({ hugCount: nextHugCount });
  }

  render() {
    let buttonText,
        child;

    if (this.state.childMounted) {
      child = <Child hugCount={this.state.hugCount} />;
      buttonText = 'Unmount Child';
    } else {
      child = null;
      buttonText = 'Mount Child';
    }

    return(
      <div>
        {child}
        <button onClick={this.handleMountClick}>{buttonText}</button>
        <button onClick={this.handleHugClick}>Hug Child</button>
      </div>
    );
  }
}

export default Parent;

