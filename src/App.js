import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import './assets/css/App.scss';
import Index from './components/index/component';

const App = props => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  )
}

export default App;
