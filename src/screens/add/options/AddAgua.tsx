import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';


const AddWater = () => {
  const [value, setValue] = useState('');
  const [history, setHistory] = useState([]);
  const [sum, setSum] = useState(0);


  const handlePress = () => {
    const newValue = parseFloat(value);
    if (!isNaN(newValue)) {
      setHistory([{value: newValue, id: Math.random().toString()}, ...history]);
      setSum(sum + newValue);
    }
    setValue('');
  };


  const handleDelete = (id) => {
    const itemToDelete = history.find(item => item.id === id);
    setHistory(history.filter(item => item.id !== id));
    setSum(sum - itemToDelete.value);
  };


  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 20 }}>Soma: {sum}ML</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={text => setValue(text)}
        value={value}
        keyboardType="numeric"  
      />
      <Button
        title="adicionar água"
        onPress={handlePress}
      />
      <Text style={{ marginTop: 20 }}>Histórico:</Text>
      <ScrollView style={{ maxHeight: 200 }}>
        {history.map((item, index) => (
          <View key={index} style={styles.historyItem}>
            <Text>{item.value}ML</Text>
            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <Text style={{ color: 'red' }}>Excluir</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 10,
  },
  textInput: {
    height: 40,
    width: 100,
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 20,
    alignItems: 'center', 
    justifyContent: 'center'
    
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 3,
  },
});

export default AddWater;
