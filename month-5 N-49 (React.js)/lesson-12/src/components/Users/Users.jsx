import React, { useContext, useEffect } from 'react'
import { Link, Outlet, useParams } from "react-router-dom"
import { axios } from '../../api/api'
import { StoreContext } from "../StoreWrapper/StoreWrapper"
import styles from './Users.module.scss'


function Users() {

  const { users, dispatch, loading } = useContext(StoreContext)
  const { id } = useParams()

  useEffect(() => {
    dispatch({
      type: 'loading',
      payload: true
    })
    axios.get("/users").then(((users) => {
      dispatch({
        type: "users",
        payload: users.data
      });
    })).catch((err) => {
      console.log(err);
    }).finally(() => {
      dispatch({
        type: 'loading',
        payload: false
      })
    })
  }, [dispatch])

  return <>
    {loading && "loading..."}
    {id ? <Outlet />
      : <div>
        <h4>Users</h4>
        <div className={styles.users}>
          {users.length && users.map((user) => (
            <div key={user.id}>
              <Link to={'orders/' + user.id}>
                <img src={user.avatar} alt={user.name} width={200} height={200} />
                <div>{user.name + " " + user.last}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>}
  </>
}

export default Users