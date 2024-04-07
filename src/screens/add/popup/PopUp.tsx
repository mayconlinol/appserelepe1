<<<<<<< Updated upstream
import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Button } from 'react-native';


const MeuModal = ({ visible, onClose, navigation }) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  useEffect(() => {
    if (selectedOption === 'Opção 1') {
      navigation.navigate('AddKcal');
    } else if (selectedOption === 'Opção 2') {
      navigation.navigate('AddWater');
    }
    setSelectedOption(null); // Limpa a opção selecionada
  }, [selectedOption, navigation]);
=======
import React, { useState, useEffect  } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Button } from 'react-native'; 
>>>>>>> Stashed changes

  const MeuModal = ({ visible, onClose, navigation }) => {
    const [modalVisible, setModalVisible] = useState(true);
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
    <View style={{ marginTop: 22 }}>
<<<<<<< Updated upstream
    <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      setModalVisible(!modalVisible);
    }}
  >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.conteiner}>

         <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={styles.closeButton}
            >
            <Button title="Fechar" onPress={() => (onClose)} />
          </TouchableOpacity>
=======
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
>>>>>>> Stashed changes

          <Text>Escolha uma opção:</Text>
          <TouchableOpacity onPress={() => {setModalVisible(!modalVisible)
            navigation.navigate('AddKcal');
            setTimeout(() => onClose('Opção 1'), 500);
          }}>
            <Text>Adicionar Calorias</Text>

          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setModalVisible(!modalVisible)
            navigation.navigate('AddWater')
            setTimeout(() => onClose('Opção 2'), 500);
          }}>
            <Text>Adicionar Água</Text>

          </TouchableOpacity>
          </View>
        </View>
<<<<<<< Updated upstream
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
=======
      </Modal>
      <Button
        title="Mostrar Modal"
        onPress={() => setModalVisible(!modalVisible)}
      />
        
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    margin: 10,
    backgroundColor: 'D9D9D9',
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
export default MeuModal;
=======
export default MeuModal;
export const setModalVisible = () => {};
>>>>>>> Stashed changes
