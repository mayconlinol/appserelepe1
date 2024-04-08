/* 
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { FAB, Portal, PaperProvider } from 'react-native-paper';

const MeuModal = () => {
  const navigation = useNavigation();
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;
  return (
    <PaperProvider>
      <Portal>
        <FAB.Group 
          open={open}
          visible
          icon={open ? 'close' : 'plus'}
          actions={[
             {
              icon: 'burger',
              label: 'Add Calorias',
              onPress: () => navigation.navigate['AddKcal']
            },
            {
              icon: 'water',
              label: 'Add Água',
              onPress: () => navigation.navigate['AddWater']
            },
          ]}
          onStateChange={onStateChange}
        />
      </Portal>
    </PaperProvider>
  );
};

export default MeuModal; */