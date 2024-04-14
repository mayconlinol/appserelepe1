import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ButtonIniciar = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => { }}
                style={{ flexDirection: 'row', alignItems: 'center' }}
            >
                <AntDesign name="pluscircleo" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: 315,
        height: 60,
        margin: 10,
        padding: 0,
        backgroundColor: 'blue'

    }
})

export default ButtonIniciar;