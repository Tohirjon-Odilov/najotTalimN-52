import React from "react";
import "./Code.scss"
import Theme from "./theme/Theme";
import Text from "./text/Text"

class Code extends React.Component{
  
  render(){
    // console.log('Main render')
    return(
      <React.Fragment>
        <Theme/>
        <Text name={"Ali"} age={'19'} street={"Kukcha"}/>
        <Text name="Vali" age={'11'} adress={{
            county: "Uzb",
            street: "chilonzor 19"
          }}/>
        <Text name="Sali" age={'13'} street={"Qatortol"}/>
        <Text name="Akrom" age={'31'} adress={{
            // county: "Aqsh", 
            street: "Yunusobod 11"
          }}/>
      </React.Fragment>
    )
  }
}

export default Code;