import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {

    const { title } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 50,
        fontWeight: "bold"
    }
});
