import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
//import recRduser from './recRduser';

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  // helpers: recRduser
});
