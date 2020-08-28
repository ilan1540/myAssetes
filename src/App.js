import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { rrfProps } from './redux/store';
import store from './redux/store';
import Navbar from './layout/Navbar';
import Routes from './routes/Routes';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <div className="App">
          <BrowserRouter>
            <Navbar />
            <Routes />
          </BrowserRouter>
        </div>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
