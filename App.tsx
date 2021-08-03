import React from 'react';
import TrackScreen from './screen/TrackScreen';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (  
    <TrackScreen />
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
