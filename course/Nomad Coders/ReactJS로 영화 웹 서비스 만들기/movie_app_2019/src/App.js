import PropTypes from "prop-types";
import React from "react";

class App extends React.Component {
  state = {
    count: 0
  };

  // setState를 호출할 때마다 react는 새로운 state와 함께 render function을 호출
  
  add = () => {
    // 비추천
    // this.setState({ count: this.state.count +1});
    // react에서 외부의 상태에 의존하지 않는 가장 좋은 방법
    this.setState(current => ({ count: current.count + 1}));
  };
  minus = () => {
    // 비추천
    // this.setState({ count: this.state.count -1});
    // react에서 외부의 상태에 의존하지 않는 가장 좋은 방법
    this.setState(current => ({ count: current.count - 1}));
  };
  
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;
