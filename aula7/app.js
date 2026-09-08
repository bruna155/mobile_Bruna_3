import react from 'react';
import {View, Text, StyleSheet } from 'react-native';
export default function app() {
   return (
    <View style={styles.container}>
        <Text style={styles.nome}>Seu nome</Text>
        <Text>Idade: 17 anos</Text>
        <Text>Cidade: Cascavel</Text>
    </View>    
   );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
        padding:20,
    },
    nome: {
      color: 'blue',
    },
});



import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const produtos = [
 { nome : " Teclado " , preco : 120.00 } ,
 { nome : " Mouse " , preco : 60.00 },
 { nome : " Monitor " , preco : 900.00 }
 ];
export default function App() {
  return (
    <View style={styles.container}>
      {produtos.map((produto, index) => (
        <Text key={index} style={styles.produto}>
          {produto.nome} - R${produto.preco.toFixed(2)}
        </Text>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
  padding: 20,
  },
  produto: {
  fontSize: 18,
  marginBottom: 10,
  },
});








