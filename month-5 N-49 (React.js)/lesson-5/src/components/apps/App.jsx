// import React from "./App.jsx"
// import st from "./App.module.scss"

// export default function App({text}){
//   console.log(text)
//   return(
//     <>
//       <div className={st[text]}>salom</div>
//     </>
//   )
// }

import React, {useRef,useState} from 'react'

export default function Ref(){

  let counter = useRef(0)
  let mainRef = useRef()
  // console.log(mainRef);
  let [status,setStatus] = useState("on")
  
  const handleClick = () => {
    counter.current ++
    console.log(counter);
  }

  const changeStatus = () => {
    setStatus(status === 'on' ? 'off': 'on')
  }

  console.log('render')

  console.log(mainRef);
  
  return(
    <main>
      <div ref={mainRef}>App: {status}</div>
      <div>
        <button onClick={handleClick}>Click me</button>
        <button onClick={changeStatus}>Render me</button>
      </div>
    </main>
  )
}