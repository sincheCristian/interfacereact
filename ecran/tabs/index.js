import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from "../Home";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Message from "../Message";
import Setting from '../setting';


const BottomTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#e91e63', // Couleur active
      }}
    >
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
            tabBarLabel: 'Message',
            tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat" color={color} size={size} />
            ),
            tabBarBadge: 5,
        }}
    />
      <Tab.Screen
        name="Home"
        component={Home} // Remplacez Home par votre composant Notification si nécessaire
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Setting} // Remplacez Home par votre composant Profil si nécessaire
        options={{
          tabBarLabel: 'Parametre',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
