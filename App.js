import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CityList from './CityList';

import { SafeAreaView } from 'react-native-safe-area-context';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CityList/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});