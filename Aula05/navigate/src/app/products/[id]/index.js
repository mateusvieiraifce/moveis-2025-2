import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';

export default function Product() {
    const {id} = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text>Tela de Produtos{id}</Text>
      <Link href="/">Voltar para a Inicio</Link>
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
});