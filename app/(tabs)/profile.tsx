import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function profile() {
    return (
        <View style={styles.container}>
            <Text>THIS IS MY PROFILEEEE</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        margin: 50
    }
})