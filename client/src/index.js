import 'materialize-css/dist/css/materialize.min.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <App />
  </Provider>,
  document.getElementById('root')
);
