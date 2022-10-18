import React from "react"
import ReactDom from "react-dom/client"
import App from "./components/apps/App"

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
  <React.Fragment>
    <App text={'katta'} />
    {/* <App text={'kichik'} /> */}
  </React.Fragment>
)