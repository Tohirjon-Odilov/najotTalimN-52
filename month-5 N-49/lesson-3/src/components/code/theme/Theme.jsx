import React from "react";

class Theme extends React.Component{
  state = {
    theme: "dark"
  }

  handleClick(){
    this.setState({
      theme: this.state.theme === "dark" ? "light" : "dark"
    });
  }

  render(){
    console.log("Theme render")
    return (
      <div className={`container ${this.state.theme === "dark" ? "dark" : "light"}`}>
        <button onClick={() => this.handleClick()}>{this.state.theme === "dark"?"light":"dark"}</button>
        <h1>Salom</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, temporibus?
          Rem suscipit et error sapiente at autem incidunt atque excepturi?
          Temporibus blanditiis reprehenderit perferendis aperiam repellendus similique qui. Reiciendis, necessitatibus.
          Odit inventore quod ullam sit aliquam similique in, eveniet dolorum.
          Natus non est veritatis! Laudantium eligendi libero quam porro non?
        </p>
      </div>
    )
  }
}

export default Theme