import React, { useEffect, useRef } from 'react'
// import Modal from "../UI/Modal/Modal"
import { UseStore } from "../UseStore/UseStore"
import './App.css'

function App() {
  // const form = e => {
  // e.preventDefault()
  // 
  // }
  const btn = useRef()
  useEffect(() => {
    console.log(btn);
  }, [])

  const [state, dispatch] = UseStore()

  return (
    <div className="container">
      <button onClick={() => dispatch({ type: "counter" })} ref={btn}>
        click - {state}
      </button>
      {/* <Modal> */}
      {/* <form onClick={form} > */}
      {/* </form> */}
      {/* </Modal> */}
    </div>
  )
}

export default App