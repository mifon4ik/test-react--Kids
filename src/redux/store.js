import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import indexReducer from './index-reducer';

const reducers = combineReducers({
  indexData: indexReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
window.store = store;