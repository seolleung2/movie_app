import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    console.log("I Added!");
    // this.setState({ count: this.state.count + 1 });
    this.setState((current) => ({ count: current.count + 1 }));
  };

  minus = () => {
    console.log("Minus!");
    // this.setState({ count: this.state.count - 1 });
    this.setState((current) => ({ count: current.count - 1 }));
  };
  render() {
    return (
      <div>
        <h1>Number Counter 👉🏾 {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
// 매 순간 내가 setState 를 호출할 때마다 react 는 새로운 state 와 함께 render function 을 호출하게 된다! 리렌더 하는거다!
export default App;
