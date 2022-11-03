import { useReducer } from "react";

export const UseStore = () => {
  const initialState = {
    counter: 0
  }
  const reducerFunc = (state, action) => {
    switch (action.type) {
      case "counter": {
        return {
          ...state,
          counter: state.counter + 1
        }
      }
      default: {
        return state
      }
    }
  }
  return useReducer(reducerFunc, initialState)
}