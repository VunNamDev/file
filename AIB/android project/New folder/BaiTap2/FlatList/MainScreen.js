import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default class MainScreen extends Component {
  render() {
    return (
      <View style={{ height: 60, margin: 2, flexDirection: 'row' }}>
        <View style={{ flex: 1 / 5 }}>
          <Image style={{ backgroundColor: 'red', height: 60 }} source={{ uri: this.props.item.url }} />
        </View>
        <View style={{ flex: 4 / 5, justifyContent: 'center', backgroundColor: '#F5FCFF' }}>
          <Text style={{ marginLeft: 20, height: 30, lineHeight: 30 }}>id: {this.props.item.id}</Text>
          <Text style={{ marginLeft: 20, height: 30, fontSize: 12, lineHeight: 30 }}>{this.props.item.title}</Text>
        </View>
      </View>
    );
  }
}
