import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { registerRootComponent } from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import App from './components/App';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Greeting test!</Text>
      <App />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

registerRootComponent(Index);