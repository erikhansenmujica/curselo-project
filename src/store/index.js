import { createStore, applyMiddleware,compose } from "redux";
import { reactReduxFirebase,getFirebase } from 'react-redux-firebase'
import thunk from 'redux-thunk'
import { reduxFirestore,getFirestore } from 'redux-firestore'
import {rootReducer } from "../reducers"
import config from '../config/app'

export default createStore(
  rootReducer, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
  reduxFirestore(config) 
))