import rootReducer from "./Reducer";
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore } from 'redux-persist';

const loggerMiddleware = createLogger();
export const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export const persistor = persistStore(store);
export default { store, persistor };