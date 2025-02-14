// App.js

import { StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import { configureStore } from "@reduxjs/toolkit";

import rootReducer from './src/app/reducer/rootReducer'; // Make sure reducers exist
import todoReducer from './src/app/reducer/todoReducer';
import { ADD_TODO, REMOVE_TODO } from './src/app/action/ActionTypes';

import { NavigationIndependentTree } from '@react-navigation/core';

import HomeScreen from '../app/HomeScreen';

const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
});

const Stack = createStackNavigator();

function App() {
    return (
      // Ensure only ONE NavigationContainer is used
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          {/* Other Screens */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;