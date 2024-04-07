import React, { useState } from 'react';
import { View, Button } from 'react-native';
import MeuModal from './popup/PopUp';

const App = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
<<<<<<< Updated upstream
  const [selectedOption, setSelectedOption] = useState('');
=======

  const [selectedOption, setSelectedOption] = useState(''); 
>>>>>>> Stashed changes

  const handleModalClose = (option) => {
    setSelectedOption(option);
    setModalVisible(false);
    if (option === 'Opção 1') {
      navigation.navigate('AddKcal');
    } else if (option === 'Opção 2') {
      navigation.navigate('AddWater');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Abrir Modal" onPress={() => setModalVisible(true)} />
      <MeuModal visible={modalVisible} onClose={handleModalClose} navigation={navigation} />
      {selectedOption ? <Text>Você escolheu: {selectedOption}</Text> : null}
    </View>
  );
};

export default App;
export const setModalVisible = () => {};