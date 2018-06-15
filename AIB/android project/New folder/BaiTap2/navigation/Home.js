import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Detail from './Detail';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ketQua: '',
      a: '',
      b: ''
    };
  }
  returnData = kq => {
    this.setState({ ketQua: kq });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 2 / 10, flexDirection: 'row', marginTop: 20 }}>
          <Text>Nhập a</Text>
          <TextInput
            onChangeText={value => {
              this.setState({ a: value.toString() });
            }}
            style={{ height: 33, width: 60, marginLeft: 10 }}
          />
        </View>
        <View style={{ flex: 2 / 10, flexDirection: 'row' }}>
          <Text>Nhập b</Text>
          <TextInput
            onChangeText={value => {
              this.setState({ b: value.toString() });
            }}
            style={{ height: 33, width: 60, marginLeft: 10 }}
          />
        </View>
        <View style={{ flex: 2 / 10, flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('ManHinhDeTail', {
                phepTinh: '+',
                a: this.state.a,
                b: this.state.b,
                returnKetQua: this.returnData
              });
            }}
            style={{ height: 20, width: 40, backgroundColor: 'red', alignItems: 'center' }}
          >
            <Text>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('ManHinhDeTail', {
                phepTinh: '-',
                a: this.state.a,
                b: this.state.b,
                returnKetQua: this.returnData
              });
            }}
            style={{ height: 20, width: 40, backgroundColor: 'red', alignItems: 'center', marginLeft: 10 }}
          >
            <Text>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('ManHinhDeTail', {
                phepTinh: '*',
                a: this.state.a,
                b: this.state.b,
                returnKetQua: this.returnData
              });
            }}
            style={{ height: 20, width: 40, backgroundColor: 'red', marginLeft: 10, alignItems: 'center' }}
          >
            <Text>*</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('ManHinhDeTail', {
                phepTinh: '/',
                a: this.state.a,
                b: this.state.b,
                returnKetQua: this.returnData
              });
            }}
            style={{ height: 20, width: 40, backgroundColor: 'red', alignItems: 'center', marginLeft: 10 }}
          >
            <Text>/</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 2 / 10, flexDirection: 'row' }}>
          <Text>Kết quả</Text>
          <Text style={{ height: 33, width: 10, marginLeft: 10 }}>{this.state.ketQua}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
