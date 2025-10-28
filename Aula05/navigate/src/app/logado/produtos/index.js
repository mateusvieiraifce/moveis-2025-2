import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Produtos() {
  return (
    <View style={styles.container}>
      <Text>Tela de Produtos</Text>
      <Link href="/">Voltar para a Produtos</Link>
     
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
