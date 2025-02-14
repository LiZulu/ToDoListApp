// app/reducer/rootReducer.js 

import { View, Text } from 'react-native';

import { combineReducers } from "redux";

import todoReducer from "./todoReducer";  // Make sure this file exists

const rootReducer = combineReducers({
    // Add reducers here (e.g., todoReducer)
    todos: todoReducer, // Ensure that this is pointing to a valid reducer
  });
  
  export default rootReducer;