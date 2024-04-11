import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import alimentos from '../../../data/alimentos.json';

const AddKcal = () => {
  const [inputText, setInputText] = useState('');
  const [history, setHistory] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const handleAddToHistory = () => {
    const item = alimentos.find(alimento => alimento.nome === inputText);
    if (item) {
      const newHistory = [...history, item];
      setHistory(newHistory);
      setInputText('');
      setSuggestions([]);
      const sum = newHistory.reduce((total, { valorkcal }) => total + valorkcal, 0);
      setTotalKcal(sum);
    }
  };

  // Adicione este estado para armazenar a soma total de kcal
  const [totalKcal, setTotalKcal] = useState(0);
  const handleInputChange = text => {
    setInputText(text);
    const filteredAlimentos = alimentos.filter(alimento => alimento.nome.toLowerCase().includes(text.toLowerCase()));
    setSuggestions(filteredAlimentos);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={handleInputChange}
        placeholder="Digite o nome do alimento"
        autoCorrect={false}
        autoCapitalize="none"
      />
      {suggestions.length > 0 && (
        <View style={styles.suggestionsContainer}>
          {suggestions.slice(0, 5).map((suggestion, index) => (
            <Text key={index} style={styles.suggestionItem} onPress={() => setInputText(suggestion.nome)}>
              {suggestion.nome}
            </Text>
          ))}
        </View>
      )}
      <Button title="Add to history" onPress={handleAddToHistory} />
      <View style={styles.historyContainer}>
        {history.map((item, index) => (
          <Text key={index} style={styles.historyItem}>
            {item.nome} - {item.porcao} - {item.valorkcal} kcal
          </Text>
        ))}
      </View>
      <View style={styles.totalKcal}>
        <Text>Total de kcal: {totalKcal} Kcal</Text>
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
  suggestionsContainer: {
    width: '80%',
    marginTop: 10,
    backgroundColor: '#eee',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 10,
  },
  suggestionItem: {
    padding: 5,
  },
  historyContainer: {
    width: '80%',
    marginTop: 20,
    backgroundColor: 'red',
    justifyContent: 'space-around',

  },
  historyItem: {
    marginBottom: 5,
  },
  totalKcal: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 100,
  },
});

export default AddKcal;