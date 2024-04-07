import React, { useState } from 'react';
import { View, Button } from 'react-native';
import MeuModal from './popup/PopUp';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  
  const handleModalClose = (option) => {
    setSelectedOption(option);
    setModalVisible(true);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MeuModal visible={modalVisible} onClose={handleModalClose} />
      {selectedOption ? <Text>Você escolheu: {selectedOption}</Text> : null}
    </View>
  );
};

export default App;