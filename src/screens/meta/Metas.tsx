import { StyleSheet, Text, View } from 'react-native';

export default function Metas({}) {
  return (
    <View style={styles.container}>
      <Text style= {styles.title} >Metas</Text>
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