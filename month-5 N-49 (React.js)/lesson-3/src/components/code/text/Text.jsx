import React from "react";
import "./Text.scss"

class Text extends React.Component{

  render(){
    console.log("Text render")
    return(
      <>
        <div className="container text">salom hammaga</div>
      </>
    )
  }
}

export default Text;