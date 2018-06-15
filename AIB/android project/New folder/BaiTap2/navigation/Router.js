import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Detail from './Detail';

export const ManHinh = StackNavigator({
  ManHinhHome: {
    screen: Home
  },
  ManHinhDeTail: {
    screen: Detail
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
