

import { createStore } from "redux";
// import userReducer from "./Reducer";
import Reducer from "./Reducer";

const store = createStore(Reducer);

export default store;