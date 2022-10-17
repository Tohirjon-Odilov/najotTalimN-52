import React from "react";
import "./Code.scss"

class Code extends React.Component{
  state = {
    theme: "dark"
  }

  handleClick(){
    this.setState({
      theme: this.state.theme === "dark" ? "light" : "dark"
    });
  }
  render(){
    console.log('app render')
    return(
      <div className={`container ${this.state.theme === "dark" ? "dark" : "light"}`}>
        <button onClick={() => this.handleClick()}>Theme</button>
        <h1>Salom</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, temporibus?
        Rem suscipit et error sapiente at autem incidunt atque excepturi?
        Temporibus blanditiis reprehenderit perferendis aperiam repellendus similique qui. Reiciendis, necessitatibus.
        Odit inventore quod ullam sit aliquam similique in, eveniet dolorum.
        Natus non est veritatis! Laudantium eligendi libero quam porro non?</p>
      </div>
    )
  }
}

export default Code;