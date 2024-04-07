

import * as React from 'react';
import { FAB, Portal, PaperProvider } from 'react-native-paper';

const MeuModal = () => {
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
              icon: '',
              label: 'Add Calorias',
              onPress: () => console.log('Pressed star'),
            },
            {
              icon: '',
              label: 'Add Água',
              onPress: () => console.log('Pressed notifications'),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </PaperProvider>
  );
};

export default MeuModal;


