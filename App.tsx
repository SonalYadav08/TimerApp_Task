import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import TimerManager from './src/screens/Timer';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TimerManager />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
});

export default App;
