import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';

export default class sources extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => { Linking.openURL("https://github.com/") }}>
                    <Text style={{ color: "#fff" }}>Open App Source on Github</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: "#666666" }]} onPress={() => { Linking.openURL("https://snack.expo.io/") }}>
                    <Text style={{ color: "#fff" }}>Open App on snack.expo</Text>
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
    },
    button: {
        padding: 30,
        backgroundColor: '#212121',
        borderRadius: 20,
        margin: 30
    }
});
