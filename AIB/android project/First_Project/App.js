import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';

const { height } = Dimensions.get('window');
const box_height = height / 3;
export default class VerticalStackLayout extends Component {
  render() {
    return (
      <View style={st.main}>
        <View style={st.box1} />
        <View style={st.box2} />
        <View style={st.box3} />
      </View>
    );
  }
}
const st = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    height: box_height,
    backgroundColor: '#F99680'
  },
  box2: {
    height: box_height,
    backgroundColor: '#AEF980'
  },
  box3: {
    height: box_height,
    backgroundColor: '#80F9D6'
  }
});
