import { combineReducers } from "redux"
import Reducer from "./Reducer"
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";

const presistConfig = {
    key: 'root',
    storage,
}
const rootReducer = combineReducers({ Reducer });
export default persistReducer(presistConfig, rootReducer);


