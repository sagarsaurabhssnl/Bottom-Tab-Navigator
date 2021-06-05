import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import facebook from './screens/facebook';
import instagram from './screens/instagram';
import sources from './screens/sources';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Facebook" component={facebook} />
        <Tab.Screen name="Instagram" component={instagram} />
        <Tab.Screen name="Sources" component={sources} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}