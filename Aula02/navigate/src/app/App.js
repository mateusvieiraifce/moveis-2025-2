import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';

export default function App() {

  const [user,setUser] = useState("");
  const [senha, setSenha] = useState();
  function handleClik(){

    if (user=="mateus" && senha =="123"){
      router.replace("/Home")
    } else  {
   /// let imc = parseFloat(peso)/ (parseFloat(altura) *parseFloat(altura));
    Alert.alert("IFCE","Usuário e senha inválido" )
    }
  }

  return (
    <View style={styles.container}>
    <Image source={require("../../assets/logo.png")}></Image>
    
    <TextInput style={styles.textInput} placeholder='Usuario' value={user} onChangeText={setUser} />


   <TextInput  style={styles.textInput} placeholder='Sennha' value={senha} onChangeText={setSenha} /> 
   
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
