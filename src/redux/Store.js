import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from 'redux-thunk';
import ThemeReducer from "./theme/Reducer/ThemeReducer";

const rootReducer = combineReducers({
  Theme: ThemeReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;