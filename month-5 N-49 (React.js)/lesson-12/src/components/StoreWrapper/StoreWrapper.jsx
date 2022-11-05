import React, { createContext, useReducer } from 'react'

export const StoreContext = createContext()

function StoreWrapper({ children }) {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StoreContext.Provider
      value={{ ...state, dispatch }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export default StoreWrapper

const initialState = {
  users: [],
  loading: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case "users": {
      return {
        ...state,
        users: action.payload,
      }
    }

    case "loading": {
      return {
        ...state,
        loading: action.payload,
      }
    }
    default: {
      return action.state
    }
  }
}