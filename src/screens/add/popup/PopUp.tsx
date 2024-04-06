import { StyleSheet, Text, View, TextInput} from 'react-native';
export default function TelaAdd(){
return(
 <View style={styles.conteiner}>
   <Text style= {styles.popUp}>
   </Text>
    <TextInput style={styles.input}></TextInput>
 </View>
);
}
const styles = StyleSheet.create({
  
    conteiner: {
        flex: .2,
        alignItems: 'center',
        justifyContent: 'center',
      },
      popUp:{
        fontSize:24,
        fontWeight: 'bold',
      },
      input:{
        backgroundColor: 'white',
        width: '90%',
      }
})
