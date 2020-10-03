import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)} //
          className="btn btn-secondary btn-sm m-1"
        >
          +
        </button>

        <button
          onClick={() => this.props.onDecrement(this.props.counter)} //
          className="btn btn-secondary btn-sm m-1"
        >
          -
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)} // Raising an event as children
          className="btn btn-danger btn-sm m-1"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary"; //if value = 0 then use badge-warning otherwise use badge-primary
    return classes;
  }

  formatCount() {
    const { value: value } = this.props.counter;
    return value === 0 ? 0 : value; // if value = 0 return "0", otherwise return value
  }
}

export default Counter;
