import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
        <Link href="/home">Go to Home</Link>
        <Link href="/users">Go to User</Link>
        <Link href="/products/123">Go to Produtos</Link>
        <Link href="/logado">Go to Logado</Link>
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
