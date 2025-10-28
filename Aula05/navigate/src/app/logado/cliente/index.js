import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Cliente() {
  const [list, setList] = useState([]);

  const [cliente, setClient] = useState({
    "id": 1,
    "name": "",
    "email": "",
    "password": "",
    "endereco": ""
});
useEffect(() => {

  axios.get('http://192.168.11.116:3000/v1/clientes/1').then(response => {
    setClient(response.data);
    Alert.alert('Sucesso', 'Dados do cliente carregados com sucesso!');
    console.log(response.data);
  }).catch(error => {
    Alert.alert('Erro', 'Não foi possível carregar os dados do cliente.');
    console.error(error);
  });

    setClient({
        "id": 1,
        "name": "Mateus",
        "email": "metrixmax@gmail.com",
        "password": "",
        "endereco": "Rua A, 123"});
      }, []); // Effect runs when 'count' changes

  return (

    <View style={styles.container}>
      <Text>Nome:{cliente.name} </Text>
      <Text>Email:{cliente.email} </Text>
      <Text>Endereco:{cliente.endereco} </Text>
      <Link href="/">Voltar para a inicio</Link>
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
});
