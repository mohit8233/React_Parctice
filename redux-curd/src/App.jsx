import React from 'react'
import UserComponent from './UserComponent'
import { Provider } from "react-redux";
import store from "./Store";
import User from './User';
const App = () => {
  return (
    <div>
     <Provider store={store}>
    <User/>
    </Provider>
    </div>
  )
}

export default App