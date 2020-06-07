import React from "react";

// import Button from './Button';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  onClickMinus(e) {
    let currentCount = this.state.count;
    this.setState({ ...this.state, count: --currentCount });
  }

  onClickPlus(e) {
    let currentCount = this.state.count;
    this.setState({ ...this.state, count: ++currentCount });
  }

  render() {
    return (
      <div className="counter">
        <button onClick={this.onClickMinus.bind(this)}>Minus</button>
        <div className="count">
          <p>Current count:</p>
          <section className={`displayNumber`}>{this.state.count}</section>
        </div>
        <button onClick={this.onClickPlus.bind(this)}>Plus</button>
      </div>
    );
  }
}
