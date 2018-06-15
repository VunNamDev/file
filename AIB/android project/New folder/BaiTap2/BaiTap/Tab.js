import { YellowBox, Image, Text } from 'react-native';
import React, { Component } from 'react';
import { createBottomTabNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Home from './Home';
import Like from './Like';
import Search from './Search';
import Add from './Add';
import Profile from './Profile';
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
    },
    Profile: {
      screen: Profile
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: ({ focused }) => {
        const { routeName } = navigation.state;
        let lab;
        switch (routeName) {
          case 'Home':
            lab = 'Trang chủ';
            break;
          case 'Like':
            lab = 'Yêu thích';
            break;
          case 'Search':
            lab = 'Tìm kiếm';
            break;
          case 'Add':
            lab = 'Thêm';
            break;
          case 'Profile':
            lab = 'Thông tin';
            break;
        }
        if (focused) return <Text style={{ fontSize: 12, textAlign: 'center' }}>{lab}</Text>;
        return <Text style={{ fontSize: 12, textAlign: 'center', color: '#d1cece' }}>{lab}</Text>;
      },

      tabBarIcon: ({ focused, tintColor }) => {
        const arrImage = {};
        const { routeName } = navigation.state;
        let iconName;

        switch (routeName) {
          case 'Home':
            iconName = require('../image/home.png');
            break;
          case 'Like':
            iconName = require('../image/like.png');
            break;
          case 'Search':
            iconName = require('../image/search.png');
            break;
          case 'Add':
            iconName = require('../image/add.png');
            break;
          case 'Profile':
            iconName = require('../image/prolife.png');
            break;
        }

        if (focused) return <Image source={iconName} style={{ height: 23, width: 23 }} />;
        return <Image source={iconName} style={{ height: 23, width: 23, tintColor: '#d1cece' }} />;
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray'
    },
    swipeEnable: true
  }
);
