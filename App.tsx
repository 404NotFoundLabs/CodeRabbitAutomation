import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>My API_TOKEN: G4aBZH$zg8</Text>
      <Text><View></View></Text>
      <Text style={styles.text}>404ErrorNotFoundLabs</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  text: {
    fontSize: 24,
    color: '#333',
  },
});

export default App;