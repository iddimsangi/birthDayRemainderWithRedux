import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import appReducer from './store/reducer';
import clearList_reducer from './store/reducers/clearList_reducer'
import deletePerson_reducer from './store/reducers/deletePerson_reducer'
import { createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';
import App from './App';
const rootReducers = combineReducers({
  clear_red:clearList_reducer,
  delete_red:deletePerson_reducer
})
const store = createStore(rootReducers);
ReactDOM.render(
  <React.StrictMode>
   <Provider store={store} ><App /></Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);
