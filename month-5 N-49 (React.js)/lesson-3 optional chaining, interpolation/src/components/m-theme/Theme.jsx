import React from "react";
import "./Theme.scss";

class Theme extends React.Component {

  state = {
    theme: "dark"
  }
  handClick(){
    console.log(this.state.theme);
    this.setState({
      theme: this.state.theme === "dark"? "light" : "dark"
    })
  }
  
  render() {
    console.log(state);
    return (
      <div className={`container ${this.state.theme === 'dark' ? "light" : 'dark'}`}>
        <div>
        <button onClick={() => this.handClick()}>Theme</button>
        <h1>Hello world</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, quaerat.</p>
        </div>
      </div>
    )
  }
}

export default Theme;
