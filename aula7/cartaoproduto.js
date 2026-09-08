import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function CartaoProduto({ nome, preco }) {
  return (
    <View style={styles.cartao}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.preco}>
        R$ {preco.toFixed(2)}
      </Text>
    </View>
  );
}    
const styles = StyleSheet.create({
  cartao: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  preco: {
    fontSize: 16,
    color: 'green',
  },
});

export default CartaoProduto;