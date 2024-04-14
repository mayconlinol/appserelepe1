import React from 'react';
import { View, Button, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import ButtonPlus from '../../components/Button/ButtonPlus';

const App = ({ navigation }) => {

  return (
    <SafeAreaView style={{ flex: 1 , alignItems: 'center', }}>
      {/* <TouchableOpacity
        onPress={() => navigation.navigate('AddLunch')}
        style={{ flexDirection: 'row', alignItems: 'center' }}
      >
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('AddLunch')}
        style={{ flexDirection: 'row', alignItems: 'center' }}
      >
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('AddDinner')}
        style={{ flexDirection: 'row', alignItems: 'center' }}
      >
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('AddSnack')}
        style={styles.button}
      >
      </TouchableOpacity> */}
      <TouchableOpacity
        onPress={() => navigation.navigate('AddLunch')}
        style={styles.button}
        >
        <ButtonPlus/>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 100,
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: 'red'
  }
})

export default App;
