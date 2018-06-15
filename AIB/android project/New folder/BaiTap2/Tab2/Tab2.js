import { YellowBox, Image, Text } from 'react-native';
import React, { Component } from 'react';
import { createBottomTabNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Home from './Home';
import Like from './Like';
import Search from './Search';
import Add from './Add';
export default TabNavigator(
  {
    Home: {
      screen: Home
    },
    Like: {
      screen: Like
    },
    Search: {
      screen: Search
    },
    Add: {
      screen: Add
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: ({ focused }) => {
        return <Text />;
      },

      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        switch (routeName) {
          case 'Home':
            iconName = require('../image/chunhat.png');
            break;
          case 'Like':
            iconName = require('../image/dot.png');
            break;
          case 'Search':
            iconName = require('../image/note.png');
            break;
          case 'Add':
            iconName = require('../image/user.png');
            break;
        }

        if (focused) return <Image source={iconName} style={{ height: 23, width: 23 }} />;
        return <Image source={iconName} style={{ height: 23, width: 23, tintColor: '#d1cece' }} />;
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'top',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray'
    },
    swipeEnable: true
  }
);
