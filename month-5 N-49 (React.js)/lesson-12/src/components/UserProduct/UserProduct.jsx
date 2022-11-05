import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { axios } from "../../api/api"
import { StoreContext } from "../StoreWrapper/StoreWrapper"

function UserProduct() {

  const { id } = useParams()
  const { loading, dispatch } = useContext(StoreContext)
  const [orders, setOrders] = useState([])

  useEffect(() => {
    dispatch({
      type: "loading",
      payload: true
    })
    axios.get(`users/${id}/orders`).then(orders => {
      setOrders(orders.data)
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      dispatch({
        type: 'loading',
        payload: false
      })
    })
  }, [dispatch, id])
  return (
    <div>
      <h5>User Orders {loading && "are loading..."}</h5>
      <div className="flex">
        {/* {orders.length === 0 && "buyurtam yuq => ustozning usuli"} */}
        {orders.length > 0
          ? orders.map((order) => (
            <div key={order.id}>
              <h5>ID: {order.id}</h5>
              <img src={order.picture} alt="" width={100} height={100} />
              <h6>{order.name} | {order.price}$</h6>
            </div>
          ))
          : !loading && <h1>Buyurtma mavjud emas</h1>}
      </div>
    </div>
  )
}

export default UserProduct