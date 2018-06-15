import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 5
    };
  }
  set = () => {
    this.setState({ time: this.state.time - 1 });
  };
  componentDidMount() {
    setInterval(this.set, 1000);
  }
  render() {
    setTimeout(() => {
      let res;
      if (this.props.navigation.state.params.phepTinh == '+') {
        res = parseInt(this.props.navigation.state.params.a) + parseInt(this.props.navigation.state.params.b);
      }
      if (this.props.navigation.state.params.phepTinh == '-') {
        res = parseInt(this.props.navigation.state.params.a) - parseInt(this.props.navigation.state.params.b);
      }
      if (this.props.navigation.state.params.phepTinh == '*') {
        res = parseInt(this.props.navigation.state.params.a) * parseInt(this.props.navigation.state.params.b);
      }
      if (this.props.navigation.state.params.phepTinh == '/') {
        res = parseInt(this.props.navigation.state.params.a) / parseInt(this.props.navigation.state.params.b);
      }
      this.props.navigation.state.params.returnKetQua(res);
      this.props.navigation.goBack();
    }, 5000);

    return (
      <View style={styles.container}>
        <Text>Đang tính toán... {this.state.time}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
