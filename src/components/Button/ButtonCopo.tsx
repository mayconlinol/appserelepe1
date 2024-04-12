import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from "../../constants/Colors";

const BackButton = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => { }}
                style={{ flexDirection: 'row', alignItems: 'center' }}
            >
                <MaterialCommunityIcons name="cup" size={28} color={Colors.lightBlue} />
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: 24,
        height: 24,
        margin: 10,
        padding: 0,

    }
})

export default BackButton;