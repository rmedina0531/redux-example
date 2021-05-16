import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CounterApp from './src/CounterApp'
import {createStore} from 'redux'

export default function App() {
  return (
    <CounterApp />
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
