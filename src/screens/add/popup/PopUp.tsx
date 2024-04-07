import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Button } from 'react-native';



const MeuModal = ({ visible, onClose, navigation }) => {
  const [modalVisible, setModalVisible] = useState(true);


  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onClose}
    >
      {/* <View style={{ backgroundColor: 'transparent', flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 55 }}> */}
      <View style={styles.conteiner}>

        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <Button title="Fechar" />
        </TouchableOpacity>

        <Text>Escolha uma opção:</Text>
        {/* Botao de adicionar calorias */}
        <TouchableOpacity onPress={() => {
          setModalVisible(false)
          navigation.navigate('AddKcal');
          setTimeout(() => onClose(), 500);
        }}>
          <Text>Adicionar Calorias</Text>
        </TouchableOpacity>
        {/* Botão para abrir a tela de adicionar agua*/}
        <TouchableOpacity onPress={() => {
          setModalVisible(false)
          navigation.navigate('AddWater')
          setTimeout(() => onClose(), 500);
        }}>
          <Text>Adicionar Água</Text>

        </TouchableOpacity>
      </View>
      {/* </View> */}
    </Modal>
  );
};

export default MeuModal;
const styles = StyleSheet.create({
  conteiner: {
    flex: .2,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  }
})
