import React from 'react';
import { Text, View, StyleSheet,Button } from 'react-native';
import Routes from './routes';
const App = () => {
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
