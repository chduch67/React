import React, { Component } from "react";
class App extends Component {
  // 마운트
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  // 변경
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }
  componentWillUpdate() {
    console.log("componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  // 언마운트
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    console.log("render");
    const setStateHandler = (e) => {
      console.log("* call setState()");
      this.setState({ r: Math.random() });
    };
    return (
      <div>
        <button onClick={setStateHandler}>setState</button>
      </div>
    );
  }
}
export default App;
