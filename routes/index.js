import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../ecran/Home';
import BottomTabs from '../ecran/tabs';

const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>{
        <Stack.Navigator initialRouteName='home'
        screenOptions={{headerShown:false}}
        >
            <Stack.Screen name = "home" component={BottomTabs} />
        </Stack.Navigator>
    }</NavigationContainer>
  )
};

export default Routes