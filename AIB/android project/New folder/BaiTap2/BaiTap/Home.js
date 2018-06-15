import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ flexDirection: 'row', height: 20, justifyContent: 'center' }}>
            <View style={{ alignItems: 'flex-start', flex: 1 / 2 }}>
              <Text style={{ marginLeft: 10, color: '#000' }}>Histories</Text>
            </View>
            <View style={{ alignItems: 'flex-end', flex: 1 / 2 }}>
              <Text style={{ marginRight: 10, color: '#000' }}>Watch All</Text>
            </View>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: 'row', height: 60, justifyContent: 'center' }}>
              <Image
                style={{ borderColor: 'pink', borderWidth: 1, margin: 7, borderRadius: 30, height: 48, width: 48 }}
                source={require('../image/gai.jpg')}
              />
              <Image
                style={{ borderColor: 'pink', borderWidth: 1, margin: 7, borderRadius: 30, height: 48, width: 48 }}
                source={require('../image/gai.jpg')}
              />
              <Image
                style={{ borderColor: 'pink', borderWidth: 1, margin: 7, borderRadius: 30, height: 48, width: 48 }}
                source={require('../image/gai.jpg')}
              />
              <Image
                style={{ borderColor: 'pink', borderWidth: 1, margin: 7, borderRadius: 30, height: 48, width: 48 }}
                source={require('../image/gai.jpg')}
              />
              <Image
                style={{ borderColor: 'pink', borderWidth: 1, margin: 7, borderRadius: 30, height: 48, width: 48 }}
                source={require('../image/gai.jpg')}
              />
              <Image
                style={{ borderColor: 'pink', borderWidth: 1, margin: 7, borderRadius: 30, height: 48, width: 48 }}
                source={require('../image/gai.jpg')}
              />
              <Image
                style={{ borderColor: 'pink', borderWidth: 1, margin: 7, borderRadius: 30, height: 48, width: 48 }}
                source={require('../image/gai.jpg')}
              />
              <Image
                style={{ borderColor: 'pink', borderWidth: 1, margin: 7, borderRadius: 30, height: 48, width: 48 }}
                source={require('../image/gai.jpg')}
              />
              <Image
                style={{ borderColor: 'pink', borderWidth: 1, margin: 7, borderRadius: 30, height: 48, width: 48 }}
                source={require('../image/gai.jpg')}
              />
            </View>
          </ScrollView>
          <View style={{ backgroundColor: '#d1cece', height: 1, margin: 15, marginTop: 10 }} />
          <View style={{ height: 70, alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ flex: 1 / 5, height: 60, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={{ borderRadius: 30, height: 48, width: 48 }} source={require('../image/gai.jpg')} />
            </View>
            <View style={{ flex: 4 / 5, height: 60 }}>
              <View style={{ height: 30, justifyContent: 'flex-end' }}>
                <Text style={{ color: '#000' }}>Varus</Text>
              </View>
              <View style={{ height: 30 }}>
                <Text style={{ color: '#000' }}>11/03/2017</Text>
              </View>
            </View>
          </View>
          <View style={{ height: 150 }}>
            <Image style={{ height: 150, width: null, margin: 5 }} source={require('../image/gai.jpg')} />
          </View>
          <View style={{ height: 34, flexDirection: 'row', margin: 10 }}>
            <Image style={{ height: 24, width: 24, margin: 5 }} source={require('../image/like.png')} />
            <Image style={{ height: 24, width: 24, margin: 5 }} source={require('../image/chat.png')} />
            <Image style={{ height: 24, width: 24, margin: 5 }} source={require('../image/fly.png')} />
          </View>
          <View style={{ height: 15, marginLeft: 15 }}>
            <Text style={{ color: '#000' }}>101 Like</Text>
          </View>
          <View style={{ height: 150, margin: 15 }}>
            <Text style={{ color: '#000' }}>
              <Text>This is</Text> similar to how you would customize a stack navigator — there are some properties that
              are set when you initialize the tab navigator and others that can be customized per-screen in
              navigationOptions.This is similar to how you would customize a stack navigator — there are some properties
              that are set when you initialize the tab navigator and others that can be customized per-screen in
              navigationOptions.
            </Text>
          </View>
          <View style={{ backgroundColor: '#d1cece', height: 1, margin: 15, marginTop: 30, marginBottom: 0 }} />
          <View style={{ backgroundColor: '#d1cece', height: 1, margin: 15, marginTop: 10 }} />
          <View style={{ height: 70, alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ flex: 1 / 5, height: 60, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={{ borderRadius: 30, height: 48, width: 48 }} source={require('../image/gai.jpg')} />
            </View>
            <View style={{ flex: 4 / 5, height: 60 }}>
              <View style={{ height: 30, justifyContent: 'flex-end' }}>
                <Text style={{ color: '#000' }}>Varus</Text>
              </View>
              <View style={{ height: 30 }}>
                <Text style={{ color: '#000' }}>11/03/2017</Text>
              </View>
            </View>
          </View>
          <View style={{ height: 150 }}>
            <Image style={{ height: 150, width: null, margin: 5 }} source={require('../image/gai.jpg')} />
          </View>
          <View style={{ height: 34, flexDirection: 'row', margin: 10, marginBottom: 20 }}>
            <Image style={{ height: 24, width: 24, margin: 5 }} source={require('../image/like.png')} />
            <Image style={{ height: 24, width: 24, margin: 5 }} source={require('../image/chat.png')} />
            <Image style={{ height: 24, width: 24, margin: 5 }} source={require('../image/fly.png')} />
          </View>
          <View style={{ height: 15, marginLeft: 15 }}>
            <Text style={{ color: '#000' }}>101 Like</Text>
          </View>
          <View style={{ height: 150, margin: 15, marginTop: 20 }}>
            <Text style={{ color: '#000' }}>
              <Text>This is</Text> similar to how you would customize a stack navigator — there are some properties that
              are set when you initialize the tab navigator and others that can be customized per-screen in
              navigationOptions.This is similar to how you would customize a stack navigator — there are some properties
              that are set when you initialize the tab navigator and others that can be customized per-screen in
              navigationOptions.
            </Text>
          </View>
          <View style={{ backgroundColor: '#d1cece', height: 1, margin: 15, marginTop: 30 }} />
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
