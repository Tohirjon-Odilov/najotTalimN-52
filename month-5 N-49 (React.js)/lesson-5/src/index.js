import React from "react"
import ReactDom from "react-dom/client"
// import App from "./components/apps/App"
import Ref from "./components/4-dars/Ref"


const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
  <React.Fragment>
    {/* <App text={'katta'} /> */}
    {/* <App text={'kichik'} /> */}
    <Ref />
  </React.Fragment>
)