import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Link, router } from 'expo-router';

export default function Home() {
    function handeClink(){
        router.replace("/App");
    }
    
  return (
    <View style={styles.container}>
      <Text>Seja bem vindo</Text>
          <TouchableOpacity style={styles.button} onPress={handeClink}>
            <Text style={{ color:"#fff" }}>Voltar </Text>
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
   button:{
    alignItems:"center", backgroundColor:"#007AFF", width:"80%", borderRadius:5, padding:10, marginTop:10

  }
});
