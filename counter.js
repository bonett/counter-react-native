import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Counter = (props) => {

    const { number } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{number}</Text>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    container: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 80,
        fontWeight: "bold"
    }
});