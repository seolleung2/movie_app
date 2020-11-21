import React from "react";
// import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor Hello");
  }
  state = {
    count: 0,
  };
  add = () => {
    // console.log("I Added!");
    // this.setState({ count: this.state.count + 1 });
    this.setState((current) => ({ count: current.count + 1 }));
  };

  minus = () => {
    // console.log("Minus!");
    // this.setState({ count: this.state.count - 1 });
    this.setState((current) => ({ count: current.count - 1 }));
  };
  // 1. Component 하나가 태어날 때 (Component 호출 👉🏾 render 실행 👉🏾 componentDidMount 실행)
  componentDidMount() {
    console.log("Component rendered");
  }

  // 2. Component 가 업데이트 될 때 (상태변화)
  componentDidUpdate() {
    console.log("I just updated");
  }
  // 3. Component 가 죽을 때, 다른 페이지로 넘어가거 나 하는 이유로..
  componentWillUnmount() {
    console.log("Goodbye, cruel world");
  }
  render() {
    console.log("I'm rendering..");
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
