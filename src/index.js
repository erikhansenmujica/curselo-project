import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import MainContainer from './containers/MainContainer';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={MainContainer} />
    </BrowserRouter>
  </Provider>,
    document.getElementById('app')

);
