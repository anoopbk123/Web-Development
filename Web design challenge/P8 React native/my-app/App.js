import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  // console.log('h')
  const [input, setInput] = useState('')
  useEffect(()=>{
    alert('first')
  },[input])
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Bla blagfg ff</Text>
      <StatusBar style="auto" />
      <TextInput style={styles.text}
      value={input}
      onChangeText={(e)=>{console.log(e);setInput(e)}}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'blue',
    borderWidth:2,
    borderRadius:45,
  },
  text:{
    color:'white',
    borderColor:'blue',
    borderWidth:2
  },
});
