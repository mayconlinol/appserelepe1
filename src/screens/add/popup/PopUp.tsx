import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Button } from 'react-native'; 

const MeuModal = ({ onClose }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ marginTop: 22 }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.conteiner}>
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={styles.closeButton}
            >
              <Text style={styles.options}>Fechar</Text>
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

      <Button
        title="Mostrar Modal"
        onPress={() => setModalVisible(true)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 115,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  closeButton: {
    marginBottom: 15,
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  options:{
  
  }
});
export default MeuModal;

