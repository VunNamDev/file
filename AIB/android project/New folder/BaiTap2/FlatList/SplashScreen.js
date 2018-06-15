import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { dot: '.' };
  }
  componentDidMount() {
    setInterval(() => {
      if (this.state.dot.length < 3) {
        this.setState({
          dot: this.state.dot + '.'
        });
      } else {
        this.setState({
          dot: '.'
        });
      }
    }, 500);
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Loading {this.state.dot}</Text>
      </View>
    );
  }
}
