import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';

export default class instagram extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => { Linking.openURL("https://instagram.com/") }}>
                    <Text style={{ color: "#fff" }}>Open Instagram</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
    }, button: {
        padding: 30,
        backgroundColor: '#d921fc',
        borderRadius: 20,
        margin: 30
    }
});
