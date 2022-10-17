import React from "react";
import "./Code.scss"
import Theme from "./theme/Theme";
import Text from "./text/Text"

class Code extends React.Component{
  
  render(){
    console.log('Main render')
    return(
      <React.Fragment>
        <Theme/>
        <Text/>
      </React.Fragment>
    )
  }
}

export default Code;