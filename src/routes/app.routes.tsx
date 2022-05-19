import React from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import { Search } from '../screens/Search';
import { Profile } from '../screens/Profile';

const { Navigator, Screen } = createBottomTabNavigator();

export default function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.white,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          backgroundColor: theme.colors.primary
        }
      }}
    >
      <Screen
        name='home'
        component={Home}
        options={{
          tabBarIcon: (({ size, color }) => 
            <Icon 
              name='home'
              size={size}
              color={color}
            />
          )
        }}
      />
      <Screen
        name="search"
        component={Search}
        options={{
          tabBarIcon: (({ size, color }) => 
            <Icon 
              name='search'
              size={size}
              color={color}
            />
          )
        }}
      />
      <Screen
        name="profile"
        component={Profile} 
        options={{
          tabBarIcon: (({ size, color }) => 
            <Icon 
              name='person'
              size={size}
              color={color}
            />
          )
        }}
      />
    </Navigator>
  );
}