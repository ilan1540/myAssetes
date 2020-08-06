// start config firestore
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createFirestoreInstance } from 'redux-firestore';

import rootReducer from './rootReducwe';

const firebaseConfig = {
  apiKey: 'AIzaSyC72vtEUI5jW0QsUyGzjRHCaKe6Yut330I',
  authDomain: 'myassetes.firebaseapp.com',
  databaseURL: 'https://myassetes.firebaseio.com',
  projectId: 'myassetes',
  storageBucket: 'myassetes.appspot.com',
  messagingSenderId: '344127993328',
  appId: '1:344127993328:web:bc40aff8a45271ec3f5935',
  measurementId: 'G-SQ08BEEQFP',
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize other services on firebase instance
firebase.firestore(); // <- needed if using firestore

// Add firebase to reducers

// צריך כדי לקלוט נתונים מ web api
const middleware = [thunk];

// Create store with reducers and initial state
const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};

export default store;
