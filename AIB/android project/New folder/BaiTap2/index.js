import { AppRegistry } from 'react-native';
import React, { Component } from 'react';

import Tab from './BaiTap/Tab';
import FlatList from './FlatList/FlatListScreen';

import { YellowBox, Image } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('BaiTap2', () => FlatList);
