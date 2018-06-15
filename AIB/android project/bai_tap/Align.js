import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
export default class extends Component {
  render() {
    return (
      <View style={stl.container}>
        <View style={stl.top}>
          <View style={stl.v1} />
          <View style={stl.v2} />
          <View style={stl.v3} />
        </View>
        <View style={stl.bottom}>
          <View style={stl.v1} />
          <View style={stl.v2} />
          <View style={stl.v3} />
        </View>
      </View>
    );
  }
}
const stl = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    flex: 1 / 2,
    flexDirection: 'row',
    alignItems: 'center'
  },
  bottom: {
    flex: 1 / 2,
    flexDirection: 'row',
    justifyContent: 'center'
  },

  v1: {
    height: 50,
    width: 50,
    backgroundColor: 'magenta'
  },
  v2: {
    height: 50,
    width: 50,
    backgroundColor: 'red'
  },
  v3: {
    height: 50,
    width: 50,
    backgroundColor: 'black'
  }
});
