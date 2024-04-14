import { StyleSheet, Text, View } from 'react-native';
import ButtonIniciar from '../../components/Button/ButtonIniciar';
import React from 'react';
export default function Feed() {
  return (
    <View style={styles.container}>
      <ButtonIniciar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});
