import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ActionSheetIOS, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CounterApp from './src/CounterApp'
import {createStore} from 'redux'
import provider from 'react-redux'
import { Provider } from 'react-redux';

const initialState = {
  counter:0
}
const reducer = (state=initialState, action) => {
  switch(action.type){
    case 'INCREASE_COUNTER':
      return {counter:state.counter + 1}
    case 'DECREASE_COUNTER':
      return {counter:state.counter -1 }
  }
  return state
}
const store = createStore(reducer)

export default function App() {
  return (
    <Provider store={store}>
      <CounterApp />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20
  },
  button: {
    borderWidth:5,
    borderColor:"#000000",
    
  }
});
