import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CounterApp() {
  const [counter, setCounter] = useState(0)

  const increaseHandler = () => {
    setCounter(counter + 1)
  }

  const decreaseHandler = () => {
    setCounter(counter - 1)
  }
  return (
    <View style={styles.container}>
      <View style={{display:"flex", flexDirection:"row", width:200, justifyContent:"space-around"}}>
        <TouchableOpacity style={styles.button} onPress={increaseHandler}>
          <Text style={styles.text}>Increase</Text>
        </TouchableOpacity>
        <Text style={styles.text, {paddingHorizontal:30, fontSize:30}}>{counter}</Text>
        <TouchableOpacity style={styles.button} onPress={decreaseHandler}>
          <Text style={styles.text}>Decrease</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
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
