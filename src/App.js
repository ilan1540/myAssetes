import React from 'react';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { rrfProps } from './redux/store';
import store from './redux/store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <div className="App">
          <h1>app</h1>
        </div>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
