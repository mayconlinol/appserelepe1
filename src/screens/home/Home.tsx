import { StyleSheet, Text, View } from 'react-native';

export default function Feed() {
  return (
    <View style={styles.container}>
      <Text style= {styles.title}>Home </Text>
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
  }
});
