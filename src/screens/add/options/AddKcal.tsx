import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddKcal = () => {
  const [inputText, setInputText] = useState('');
  const [history, setHistory] = useState([]);

  const handleAddToHistory = () => {
    setHistory([...history, inputText]);
    setInputText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={text => setInputText(text)}
      />
      <Button title="Adicionar" onPress={handleAddToHistory} />
      <View style={styles.historyContainer}>
        {history.map((item, index) => (
          <Text key={index} style={styles.historyItem}>
            {item}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 10,
  },
  historyContainer: {
    width: '80%',
    marginTop: 20,
    backgroundColor: 'red',
  },
  historyItem: {
    marginBottom: 5,
  },
});

export default AddKcal;