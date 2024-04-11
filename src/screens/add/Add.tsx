import React from 'react';
import { View, Button } from 'react-native';

const App = ({navigation}) => {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Ir para a página 1"
        onPress={() => navigation.navigate('Page1')}
      />
      <Button
        title="Ir para a página 2"
        onPress={() => navigation.navigate('Page2')}
      />
      <Button
        title="Ir para a página 3"
        onPress={() => navigation.navigate('Page3')}
      />
      <Button
        title="Ir para a página 4"
        onPress={() => navigation.navigate('Page4')}
      />
    </View>
  );
};

export default App;
