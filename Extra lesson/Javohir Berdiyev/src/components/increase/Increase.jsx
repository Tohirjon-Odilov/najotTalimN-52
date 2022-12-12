import React from "react";
import style from "./style.module.scss";

class Increase extends React.Component {
  state = {
    number: 1,
  };
  swithNumberIncrease = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  switchNumberDecrease = () => {
    this.setState({
      number: this.state.number - 1,
    });
  };
  switchNumberReset = () => {
    this.setState({
      number: 0,
    });
  };
  render() {
    const { number } = this.state;
    return (
      <div className={"center"}>
        <div className={style.body}>
          <h1>{number}</h1>
          <div className={style.wrapper}>
            <button
              className="bg-black outline-none border-none"
              onClick={this.swithNumberIncrease}
            >
              +
            </button>
            <button onClick={this.switchNumberDecrease}>-</button>
            <button onClick={this.switchNumberReset}>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Increase;
