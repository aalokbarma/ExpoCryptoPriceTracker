import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Text, View, SafeAreaView } from 'react-native';
import CurrencyRow from './Components/CurrencyRow';
import Navigation from './navigation';
import HomeScreen from './Screens/HomeScreen';
import Styles from './Styles';

export default function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar style="light" />
      <Navigation />
    </SafeAreaView>
  );
}


