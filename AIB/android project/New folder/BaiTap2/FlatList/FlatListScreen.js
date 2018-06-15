import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, Image } from 'react-native';
import SplashScreen from './SplashScreen';
import MainScreen from './MainScreen';

export default class FlatListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [], screen: 0 };
  }
  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          list: responseJson,
          screen: 1
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.screen == 0 ? (
          <SplashScreen />
        ) : (
          <FlatList
            data={this.state.list}
            renderItem={({ item, index }) => {
              return <MainScreen item={item} />;
            }}
          />
        )}

        <Text>Man hinh chinh</Text>
      </View>
    );
  }
}
