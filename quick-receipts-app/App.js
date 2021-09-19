import React from 'react';
import Home from './components/Home';
import Camera from './components/Camera';
import Receipts from './components/Receipts';

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default class App extends React.Component {
  render() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={{ title: 'Camera' }}
        />
        <Stack.Screen name="Receipts" component={Receipts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    
  }
});
