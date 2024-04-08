
import { StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { FAB, Portal, PaperProvider } from 'react-native-paper';


export default function ButtonAdd({}) {
    const navigation = useNavigation();
    const [state, setState] = React.useState({ open: false });
    const onStateChange = ({ open }) => setState({ open });
    const { open } = state;

    return (
        <PaperProvider>
            <Portal>
                <FAB.Group style={styles.container}
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
                    onPress={() => {
                        if (open) {
                            // do something if the speed dial is open
                        }
                    }}
                />
            </Portal>
        </PaperProvider>
    );

}
const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#3eccf5',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
