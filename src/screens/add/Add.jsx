import { StyleSheet, Text, View } from 'react-native';
import PopUp from './popup/PopUp';
export default function Add() {
  return (
    <View style={styles.container}>
      <Text style= {styles.title}>add kcal e agua</Text>
      <PopUp/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:24,
    fontWeight: 'bold',
  }
});