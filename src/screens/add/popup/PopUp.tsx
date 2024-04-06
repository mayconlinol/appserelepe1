import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Button } from 'react-native';

const MeuModal = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.conteiner}>
          <TouchableOpacity onPress={() => onClose('Opção 1')}>
          <Button title="Fechar" onPress={() => (onClose)} />
          </TouchableOpacity>
          <Text>Escolha uma opção:</Text>
          <TouchableOpacity onPress={() => onClose('Opção 1')}>
            <Text>Opção 1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onClose('Opção 2')}>
            <Text>Opção 2</Text>
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
      popUp:{
        fontSize:24,
        fontWeight: 'bold',
      },
    
})
