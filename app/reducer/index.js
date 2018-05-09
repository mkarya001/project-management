import { combineReducers } from "redux";

import books from "./bookReducer"
import testreducer from "./testReducer"

export default combineReducers({
    books,
    testreducer
});