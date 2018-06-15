import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

export default class BaiTest extends Component {
  render() {
    return (
      <View>
        <View style={stl.header} />
        <ScrollView>
          <View style={[stl.container]}>
            <View style={[stl.box]} />
            <View style={[stl.box]} />
            <View style={[stl.box]} />
            <View style={[stl.box]} />
            <View style={[stl.box]} />
            <View style={[stl.box]} />
            <View style={[stl.box]} />
          </View>
        </ScrollView>
        <View style={stl.footer} />
      </View>
    );
  }
}
const stl = StyleSheet.create({
  container: {
    flex: 8 / 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  box: {
    height: 200,
    width: 200,
    backgroundColor: 'blue',
    marginBottom: 10
  },
  header: {
    height: 40,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: '#03A9F4',
    zIndex: 30
  },
  footer: {
    flex: 1 / 10,
    backgroundColor: 'magenta'
  }
});
