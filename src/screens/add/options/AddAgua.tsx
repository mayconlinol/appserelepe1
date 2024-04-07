import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView, TouchableOpacity } from 'react-native';


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
    <View style={{ padding: 20 }}>
      <Text style={{ marginTop: 20 }}>Soma: {sum}ML</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
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
          <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
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


export default AddWater;
