import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

class ExampleMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      selectedIndices: [0],
      customStyleIndex: 0
    };
  }

  // handleSingleIndexSelect = index => {
  //   this.setState({
  //     ...this.state,
  //     selectedIndex: index
  //   });
  // };

  // handleMultipleIndexSelect = index => {
  //   if (this.state.selectedIndices.includes(index)) {
  //     this.setState({
  //       ...this.state,
  //       selectedIndices: this.state.selectedIndices.filter(i => i !== index)
  //     });
  //   } else {
  //     this.setState({
  //       ...this.state,
  //       selectedIndices: [...this.state.selectedIndices, index]
  //     });
  //   }
  // };

  handleCustomIndexSelect = index => {
    this.setState({
      ...this.state,
      customStyleIndex: index
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <SegmentedControlTab
          values={['one', 'two']}
          selectedIndex={this.state.customStyleIndex}
          onTabPress={this.handleCustomIndexSelect}
          borderRadius={0}
          tabsContainerStyle={{ height: 50, backgroundColor: '#F2F2F2' }}
          tabStyle={{ backgroundColor: '#F2F2F2', borderWidth: 0, borderColor: 'transparent' }}
          activeTabStyle={{ backgroundColor: 'white', marginTop: 2 }}
          tabTextStyle={{ color: '#444444', fontWeight: 'bold' }}
          activeTabTextStyle={{ color: '#888888' }}
        />
        {/* {this.state.customStyleIndex === 0 && <Text style={styles.tabContent}> Tab one</Text>}
        {this.state.customStyleIndex === 1 && <Text style={styles.tabContent}> Tab two</Text>} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'white',
    padding: 10
  }

  // tabContent: {
  //   color: '#444444',
  //   fontSize: 18,
  //   margin: 24
  // },

  // activeTabStyle: {
  //   backgroundColor: '#D52C43'
  // },
  // tabTextStyle: {
  //   color: '#D52C43'
  // }
});

export default ExampleMain;
