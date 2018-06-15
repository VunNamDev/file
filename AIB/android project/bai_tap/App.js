import React, { Component } from 'react';
import { Image, Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import Scroll from './ScrollMain';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }

  pressTab = index => {
    this.setState({
      ...this.state,
      selectedIndex: index
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.back}>
            <Image style={{ width: 16, height: 16 }} source={require('./image/back.png')} />
          </View>
          <Text style={styles.name}>Cấu hình chấm công cho công ty</Text>
        </View>
        <View style={{ flex: 1 }}>
          <SegmentedControlTab
            values={['Hình thức', 'Thời gian']}
            onTabPress={this.pressTab}
            borderRadius={0}
            selectedIndex={this.state.selectedIndex}
            tabsContainerStyle={{ height: 40, backgroundColor: '#0795db' }} //tab to
            tabStyle={{ backgroundColor: '#fff', borderColor: 'transparent' }}
            tabTextStyle={{ color: '#696969', fontWeight: 'bold' }}
            activeTabStyle={{ backgroundColor: 'white', marginBottom: 3 }}
            activeTabTextStyle={{ color: '#0795db' }}
          />
          <View style={{ height: 3, backgroundColor: '#e8ebf0' }} />
          {this.state.selectedIndex === 0 && <Scroll />}
          {this.state.selectedIndex === 1 && <Text style={styles.tabContent}> Tab two</Text>}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff'
  },
  top: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0795db'
  },
  back: {
    height: 50,
    width: 30,
    position: 'absolute',
    top: 0,
    left: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    color: '#ffffff',
    fontSize: 16
  },

  tabContent: {
    color: '#444444',
    fontSize: 18,
    margin: 24
  }
});
