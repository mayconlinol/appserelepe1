/* import React, { useState } from 'react';
import { View, Button } from 'react-native';
import MeuModal from './popup/PopUp';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleModalClose = (option) => {
    setSelectedOption(option);
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Abrir Modal" onPress={() => setModalVisible(true)} />
      <MeuModal visible={modalVisible} onClose={handleModalClose} />
      {selectedOption ? <Text>Você escolheu: {selectedOption}</Text> : null}
    </View>
  );
};

export default App; */

import { StyleSheet, Text, View } from 'react-native';

export default function Add() {
  return (
    <View style={styles.container}>
      <Text style= {styles.title}>olha</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:24,
    fontWeight: 'bold',
  }});
