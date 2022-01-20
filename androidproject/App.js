
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import BottomView from './src/BottomView';
import TopView from './src/TopView';

export default function App() {
  return (
    // <View style={styles.container}>
    //  <Text style={{color: '#000'}}>Hi </Text>
    //  <Image
    //      source={{
    //        uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
    //      }}
    //      style={{width: 200, height: 200}}
    //  />
    //  <TextInput placeholder='Input text here..'/>
    // </View>
    <>
     <BottomView/>
     <TopView/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2:{
    backgroundColor: 'green'
  },
  text1:{
    color: 'blue'
  }
});