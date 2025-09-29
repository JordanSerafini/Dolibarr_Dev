import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TicketListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tickets</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
  },
  text: {
    color: '#ffffff',
    fontSize: 24,
  },
});