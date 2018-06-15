import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ height: 70, flexDirection: 'row', marginTop: 10 }}>
            <Image style={{ height: 70, flex: 1 / 4, marginLeft: 1 }} source={require('../image/gai.jpg')} />
            <Image style={{ height: 70, flex: 1 / 4, marginLeft: 1 }} source={require('../image/gai.jpg')} />
            <Image style={{ height: 70, flex: 1 / 4, marginLeft: 1 }} source={require('../image/gai.jpg')} />
            <Image
              style={{ height: 70, flex: 1 / 4, marginLeft: 1, marginRight: 1 }}
              source={require('../image/gai.jpg')}
            />
          </View>
          <View style={{ height: 70, flexDirection: 'row', marginTop: 1 }}>
            <Image style={{ height: 70, flex: 1 / 4, marginLeft: 1 }} source={require('../image/gai.jpg')} />
            <Image style={{ height: 70, flex: 1 / 4, marginLeft: 1 }} source={require('../image/gai.jpg')} />
            <Image style={{ height: 70, flex: 1 / 4, marginLeft: 1 }} source={require('../image/gai.jpg')} />
            <Image
              style={{ height: 70, flex: 1 / 4, marginLeft: 1, marginRight: 1 }}
              source={require('../image/gai.jpg')}
            />
          </View>
          <View style={{ height: 70, flexDirection: 'row', marginTop: 1 }}>
            <Image style={{ height: 70, flex: 1 / 4, marginLeft: 1 }} source={require('../image/gai.jpg')} />
            <Image style={{ height: 70, flex: 1 / 4, marginLeft: 1 }} source={require('../image/gai.jpg')} />
            <Image style={{ height: 70, flex: 1 / 4, marginLeft: 1 }} source={require('../image/gai.jpg')} />
            <Image
              style={{ height: 70, flex: 1 / 4, marginLeft: 1, marginRight: 1 }}
              source={require('../image/gai.jpg')}
            />
          </View>
          <View style={{ height: 70, flexDirection: 'row', marginTop: 1 }}>
            <Image style={{ height: 70, flex: 1 / 4, marginLeft: 1 }} source={require('../image/gai.jpg')} />
            <Image style={{ height: 70, flex: 1 / 4, marginLeft: 1 }} source={require('../image/gai.jpg')} />
            <Image style={{ height: 70, flex: 1 / 4, marginLeft: 1 }} source={require('../image/gai.jpg')} />
            <Image
              style={{ height: 70, flex: 1 / 4, marginLeft: 1, marginRight: 1 }}
              source={require('../image/gai.jpg')}
            />
          </View>
          <View style={{ height: 70, flexDirection: 'row', marginTop: 1 }}>
            <Image style={{ height: 70, flex: 1 / 4, marginLeft: 1 }} source={require('../image/gai.jpg')} />
            <Image style={{ height: 70, flex: 1 / 4, marginLeft: 1 }} source={require('../image/gai.jpg')} />
            <Image style={{ height: 70, flex: 1 / 4, marginLeft: 1 }} source={require('../image/gai.jpg')} />
            <Image
              style={{ height: 70, flex: 1 / 4, marginLeft: 1, marginRight: 1 }}
              source={require('../image/gai.jpg')}
            />
          </View>
          <View style={{ height: 70, flexDirection: 'row', marginTop: 1 }}>
            <Image style={{ height: 70, flex: 1 / 4, marginLeft: 1 }} source={require('../image/gai.jpg')} />
            <Image style={{ height: 70, flex: 1 / 4, marginLeft: 1 }} source={require('../image/gai.jpg')} />
            <Image style={{ height: 70, flex: 1 / 4, marginLeft: 1 }} source={require('../image/gai.jpg')} />
            <Image
              style={{ height: 70, flex: 1 / 4, marginLeft: 1, marginRight: 1 }}
              source={require('../image/gai.jpg')}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});
