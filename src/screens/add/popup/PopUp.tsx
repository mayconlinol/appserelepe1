import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Button } from 'react-native';


const MeuModal = ({ visible, onClose, navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  useEffect(() => {
    if (selectedOption === 'Opção 1') {
      navigation.navigate('AddKcal');
    } else if (selectedOption === 'Opção 2') {
      navigation.navigate('AddWater');
    }
    setSelectedOption(null); // Limpa a opção selecionada
  }, [selectedOption, navigation]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.conteiner}>

          <TouchableOpacity onPress={() => onClose()}>
            <Button title="Fechar" onPress={() => (onClose)} />
          </TouchableOpacity>

          <Text>Escolha uma opção:</Text>
          <TouchableOpacity onPress={() => {
            navigation.navigate('AddKcal');
            setTimeout(() => onClose('Opção 1'), 500);
          }}>
            <Text>Adicionar Calorias</Text>

          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            navigation.navigate('AddWater')
            setTimeout(() => onClose('Opção 2'), 500);
          }}>
            <Text>Adicionar Água</Text>

          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default MeuModal;
const styles = StyleSheet.create({

  conteiner: {
    flex: .2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  },
  popUp: {
    fontSize: 24,
    fontWeight: 'bold',
  },

})
