import { StyleSheet, Text, View } from 'react-native';

export default function TelaAdd(){
return(
 <View style={styles.conteiner}>
   <Text style= {styles.popUp}>PopUp</Text>
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
      }
})
