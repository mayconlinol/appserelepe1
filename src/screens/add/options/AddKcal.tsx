import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddKcal() {
  return (
    <View style={styles.container}>
      <Text style= {styles.title}>npome</Text>
      <TextInput style={styles.input} placeholder="Enter Kcal" />
      <Button title='Add' color="#841584"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:24,
    fontWeight: 'bold',
  },
  input: {
    width:"70%",
    height:30,
    marginTop:10,
    padding:6,
    borderWidth:1,
    borderRadius:10,
    borderColor:'#ccc',
  }
});
