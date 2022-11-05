import React from 'react'
import { Link, Route, Routes } from "react-router-dom";
// import { StoreContext } from "../StoreWrapper/StoreWrapper"
import style from './App.module.scss'
import Users from "../Users/Users";
import UserProduct from '../UserProduct/UserProduct'

function App() {

  // const ctx = useContext(StoreContext)
  // console.log(ctx);

  return (
    <div>
      <header>
        <Link children={"Express 25"} to={"/"} />
      </header>
      <div className={style.container}>
        <div className="container">
          <Link to={"/users"}>Users</Link>
        </div>
        <div className={"container"}>
          <Routes>
            <Route index element={<h4>Ish stoliga hush kelibsiz!</h4>} />
            <Route path="/users" element={<Users />}>
              <Route path="orders/:id" element={<UserProduct />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App