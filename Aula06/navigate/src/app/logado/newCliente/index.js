import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function NewCliente() {
   const [nome, setNome] = useState('');
   const [email, setEmail] = useState(''); 
   const [password, setPassword] = useState('defaultpassword');
   const [endereco, setEndereco] = useState('defaultendereco');
 
useEffect(() => {
  
      }, []); // Effect runs when 'count' changes

  async function handleSave() {

    const body = {
      name: nome,
      email: email,
      password: password ,
      endereco: endereco 
    };  

    const salvar = await axios.post('http://10.20.1.204:3000/v1/clientes', body).then(response => {
      Alert.alert('Sucesso', 'Cliente criado com sucesso!');
      console.log(response.data);
    }).catch(error => {
      Alert.alert('Erro', 'Não foi possível criar o cliente.');
      console.error(error);
    });
    // pegar os dados, enviar pro backend

  }    
  return (

    <View style={styles.container}>
      <Text style={styles.text_email} >Nome:</Text>
      <TextInput style={styles.input} placeholder="Nome" onChangeText={(e)=>setNome(e)} />
      <Text style={styles.text_email}>Email:</Text>
      <TextInput style={styles.input} placeholder="Email" onChangeText={(e)=>setEmail(e)} />
       <Text style={styles.text_email}>Senha:</Text>
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true}  onChangeText={(e)=>setPassword(e)} />

      <Text style={styles.text_email}>Endereco:</Text>
      <TextInput style={styles.input} placeholder="Endereço" onChangeText={(e)=>setEndereco(e)} />


      <TouchableOpacity
        style={styles.button}
        onPress={() => handleSave()}
      >   
      <Text>Salvar</Text> 
      </TouchableOpacity>  
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 20  },
  input: {
    height: 40,
    borderColor: 'gray',  
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    width: '80%',
  },  
  text_email: {
    height: 40,
    marginBottom: -20,
    width: '80%',
  }, 
  button:{
     alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  }
});
