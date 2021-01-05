import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, } from 'react-native';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import Home from './src/screens/Home';
import Navigation from './src/navigation/navigation';
import StartNavigation from './src/navigation/Startnav';

const App = () => {
  return (
    <>
      <StartNavigation />
      {/* <Navigation /> */}
    </>
  );
};

export default App;
