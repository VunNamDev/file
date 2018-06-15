import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Tab2 from '../Tab2/Tab2';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: '#d1cece', height: 1, margin: 15, marginTop: 10 }} />
        <View style={{ height: 90, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ flex: 1 / 5, height: 60, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ borderRadius: 30, height: 48, width: 48 }} source={require('../image/gai.jpg')} />
          </View>
          <View style={{ flex: 4 / 5, height: 90 }}>
            <View style={{ height: 60, flexDirection: 'row', alignItems: 'flex-end' }}>
              <View style={{ flex: 1 / 3, alignItems: 'center' }}>
                <Text style={{ color: '#000' }}>20</Text>
                <Text>Post</Text>
              </View>
              <View style={{ flex: 1 / 3, alignItems: 'center' }}>
                <Text style={{ color: '#000' }}>206</Text>
                <Text>Followers</Text>
              </View>
              <View style={{ flex: 1 / 3, alignItems: 'center' }}>
                <Text style={{ color: '#000' }}>167</Text>
                <Text>Following</Text>
              </View>
            </View>
            <View style={{ height: 30, flexDirection: 'row' }}>
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 7,
                  flex: 4 / 5,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Text>Edit profile</Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 7,
                  flex: 1 / 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 10,
                  marginRight: 10
                }}
              >
                <Image style={{ height: 26, width: 26 }} source={require('../image/setting.png')} />
              </View>
            </View>
          </View>
        </View>
        <View style={{ height: 20, justifyContent: 'center', marginLeft: 10, marginTop: 10 }}>
          <Text style={{ color: '#000' }}>Lark | Compute jock | Pilot</Text>
        </View>
        <View style={{ height: 25, justifyContent: 'center', marginLeft: 10 }}>
          <Text style={{ color: 'blue' }}>www.reactnative.ord</Text>
        </View>
        <Tab2 />
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
