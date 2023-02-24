import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, combineReducers } from 'redux';
import { addEmployees, removeEmployees } from './reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'

const root = ReactDOM.createRoot(document.getElementById('root'));

// const rootReducer = combineReducers({addEmployees, removeEmployees});

// const store = configureStore({reducer: rootReducer})
root.render(
  // <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  // </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();