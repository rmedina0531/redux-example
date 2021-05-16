import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {connect} from 'react-redux'

function CounterApp(props) {
  return (
    <View style={styles.container}>
      <View style={{display:"flex", flexDirection:"row", width:200, justifyContent:"space-around"}}>
        <TouchableOpacity style={styles.button} onPress={props.increaseCounter}>
          <Text style={styles.text}>Increase</Text>
        </TouchableOpacity>
        <Text style={styles.text, {paddingHorizontal:30, fontSize:30}}>{props.counter}</Text>
        <TouchableOpacity style={styles.button} onPress={props.decreaseCounter}>
          <Text style={styles.text}>Decrease</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)

function mapDispatchToProps(dispatch){
  return {
    increaseCounter : () => dispatch({type:'INCREASE_COUNTER'}),
    decreaseCounter : () => dispatch({type:'DECREASE_COUNTER'})
  }
}

function mapStateToProps (state){
  return{
    counter:state.counter
  }
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
