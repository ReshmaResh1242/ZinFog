import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// ------------------ Screens Imports ---------------------
import LoationListScreen from './Screens/LoationListScreen';
import MapScreen from './Screens/MapScreen';
import ViewMapScreen from './Screens/ViewMapScreen';

const Tab = createBottomTabNavigator();

const LocationStack = createNativeStackNavigator();

function LocationStackScreen() {
  return (
    <LocationStack.Navigator  screenOptions={{ headerShown: false }}>
      <LocationStack.Screen name="LoationListScreen" component={LoationListScreen} />
      <LocationStack.Screen name="ViewMap" component={ViewMapScreen} />
    </LocationStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Maps" component={MapScreen} />
        <Tab.Screen name="Location" component={LocationStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}