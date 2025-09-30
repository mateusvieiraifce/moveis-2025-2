import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [peso,setPeso] = useState("");
  const [altura, setAltura] = useState();
  function handleClik(){
    let imc = parseFloat(peso)/ (parseFloat(altura) *parseFloat(altura));
    Alert.alert("IFCE","Seu IMC é" + imc )
  }

  return (
    <View style={styles.container}>
    <Image source={require("./assets/logo.png")}></Image>
    
    <TextInput style={styles.textInput} placeholder='Peso' value={peso} onChangeText={setPeso} />


   <TextInput  style={styles.textInput} placeholder='Altura' value={altura} onChangeText={setAltura} /> 
   
    <TouchableOpacity style={styles.button} onPress={handleClik}>
      <Text style={{ color:"#fff" }}>Calcular</Text>
    </TouchableOpacity>
   
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
  textInput:{
     borderWidth:1, width:"80%" , marginTop:20, borderColor:'gray', borderRadius:10
  },
  button:{
    alignItems:"center", backgroundColor:"#007AFF", width:"80%", borderRadius:5, padding:10, marginTop:10

  }
});
