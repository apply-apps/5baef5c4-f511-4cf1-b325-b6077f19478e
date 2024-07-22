// Filename: index.js
// Combined code from all files
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Hello!</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: '20px',
        backgroundColor: '#FFFFFF',
        height: '100vh',
        marginTop: '30px', // Avoid overlapping with the status bar
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});