import React from "./App.jsx"
import st from "./App.module.scss"

export default function App({text}){
  console.log(text)
  return(
    <>
      <div className={st[text]}>salom</div>
    </>
  )
}