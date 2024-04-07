import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function TelaAddKcal() {
  return (
    <View style={styles.container}>
      <Text style= {styles.title}>Home </Text>
      <TextInput style={styles.input} placeholder="Digite aqui" />
      <Button title='Adicionar'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf9c4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
  }
});
