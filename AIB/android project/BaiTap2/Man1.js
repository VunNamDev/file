/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button } from 'react-native';

export default class Man1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ten: 'Vũ Văn Nam',
      maSV: '1041060081'
    };
  }
  clickMe = () => {
    this.setState({
      ten: 'xxx'
    });
    alert(this.state.ten);
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: '#0795DB', height: 60, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18 }}>Hoàng Thu Trang</Text>
          <Image
            style={{ width: 16, height: 16, position: 'absolute', top: 22, left: 10 }}
            source={require('./image/back.png')}
          />
        </View>

        <View style={{ flexDirection: 'row', height: 60, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ marginRight: 10, width: 24, height: 24 }} source={require('./image/ic_today.png')} />
          <Text style={{ color: '#4F545C', fontSize: 15 }}>Thứ 2 ngày 20/3/2018</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ marginTop: 22, flex: 1.5 / 9, alignItems: 'center' }}>
            <View style={{ height: 60 }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 30,
                  flexDirection: 'row'
                }}
              >
                <View style={{ height: 30, flex: 1 / 2 }} />
                <View style={{ height: 30, flex: 1 / 2 }}>
                  <Image
                    style={{ position: 'absolute', left: -1, top: 0, width: 16, height: 16 }}
                    source={require('./image/Group_7_1.png')}
                  />
                </View>
              </View>
              <View>
                <View style={{ height: 30, width: 1, backgroundColor: '#7B828C' }} />
              </View>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', height: 155 }}>
              <View style={{ height: 30, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: 16, height: 16 }} source={require('./image/ring_red.png')} />
              </View>

              <View style={{ height: 125, width: 1, backgroundColor: '#7B828C' }} />
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', height: 60 }}>
              <View style={{ height: 30, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: 16, height: 16 }} source={require('./image/ring_green.png')} />
              </View>

              <View style={{ height: 30, width: 1, backgroundColor: '#7B828C' }} />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: 60 }}>
              <View style={{ height: 30, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: 16, height: 16 }} source={require('./image/ring_yellow.png')} />
              </View>

              <View style={{ height: 30, width: 1, backgroundColor: '#7B828C' }} />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: 60 }}>
              <View style={{ height: 30, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: 16, height: 16 }} source={require('./image/ring_green.png')} />
              </View>

              <View style={{ height: 30, width: 1, backgroundColor: '#7B828C' }} />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: 30 }}>
              <View style={{ height: 30, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: 16, height: 16 }} source={require('./image/ring_blue.png')} />
              </View>
            </View>
          </View>
          <View style={{ flex: 7.5 / 9, flexDirection: 'column', marginRight: 10 }}>
            <View style={{ height: 60, flexDirection: 'row' }}>
              <View style={{ flex: 1 / 4, justifyContent: 'center' }}>
                <Text tyle={{ fontSize: 15, color: '#525E70', fontWeight: 'bold' }}>8:30:00</Text>
              </View>
              <View style={{ flex: 3 / 4, justifyContent: 'center' }}>
                <Text style={{ color: '#7B828C' }}>{this.state.ten}</Text>
              </View>
            </View>
            <View style={{ height: 1, backgroundColor: '#7B828C' }} />

            <View style={{ height: 70, flexDirection: 'row' }}>
              <View style={{ flex: 1 / 4, justifyContent: 'center' }}>
                <Text tyle={{ fontSize: 15, color: '#525E70', fontWeight: 'bold' }}>8:30:00</Text>
              </View>
              <View style={{ flex: 1.5 / 4, justifyContent: 'center' }}>
                <Text style={{ color: '#7B828C' }}>Checkout</Text>
              </View>
              <View style={{ backgroundColor: 'red', flex: 1.5 / 4, justifyContent: 'center', alignItems: 'center' }}>
                <Text
                  onPress={this.clickMe}
                  style={{
                    backgroundColor: '#EB5757',
                    color: '#FFF',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    lineHeight: 30,
                    width: 100,
                    height: 30,
                    borderColor: '#EB5757',
                    borderRadius: 5,
                    borderWidth: 1
                  }}
                >
                  Sớm 10M34S
                </Text>
              </View>
            </View>
            <View style={{ backgroundColor: '#F2F3F5', borderRadius: 5, height: 80, paddingLeft: 4 }}>
              <Text style={{ fontSize: 13, color: '#7B828C', marginTop: 10 }}>
                Toà nhà Saigon Centre - Tháp 2,67 Lê Lợi,{'\n'}Phường bến nghe Quận 1 Tp Hồ Chí Minh,{'\n'}
              </Text>
              <Text style={{ fontSize: 13, color: '#EB5757', marginTop: 10 }}>
                Địa điểm không hợp lệ, cần được admin xác nhận
              </Text>
            </View>
            <View style={{ marginTop: 10, height: 1, backgroundColor: '#7B828C' }} />
            <View style={{ height: 60, flexDirection: 'row' }}>
              <View style={{ flex: 1 / 4, justifyContent: 'center' }}>
                <Text tyle={{ fontSize: 15, color: '#525E70', fontWeight: 'bold' }}>8:30:00</Text>
              </View>
              <View style={{ flex: 3 / 4, justifyContent: 'center' }}>
                <Text style={{ color: '#7B828C' }}>Checkin</Text>
              </View>
            </View>
            <View style={{ height: 1, backgroundColor: '#7B828C' }} />
            <View style={{ height: 60, flexDirection: 'row' }}>
              <View style={{ flex: 1 / 4, justifyContent: 'center' }}>
                <Text tyle={{ fontSize: 15, color: '#525E70', fontWeight: 'bold' }}>8:30:00</Text>
              </View>
              <View style={{ flex: 3 / 4, justifyContent: 'center' }}>
                <Text style={{ color: '#7B828C' }}>Xin ngỉ 1h30p</Text>
              </View>
            </View>
            <View style={{ height: 1, backgroundColor: '#7B828C' }} />
            <View style={{ height: 60, flexDirection: 'row' }}>
              <View style={{ flex: 1 / 4, justifyContent: 'center' }}>
                <Text tyle={{ fontSize: 15, color: '#525E70', fontWeight: 'bold' }}>8:30:00</Text>
              </View>
              <View style={{ flex: 1.5 / 4, justifyContent: 'center' }}>
                <Text style={{ color: '#7B828C' }}>Checkin</Text>
              </View>
              <View style={{ flex: 1.5 / 4, justifyContent: 'center', alignItems: 'center' }}>
                <Text
                  style={{
                    backgroundColor: '#34C270',
                    color: '#FFF',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    lineHeight: 30,
                    width: 100,
                    height: 30,
                    borderColor: '#34C270',
                    borderRadius: 5,
                    borderWidth: 1
                  }}
                >
                  Sớm 10M34S
                </Text>
              </View>
            </View>
            <View style={{ height: 60, flexDirection: 'row' }}>
              <View style={{ flex: 1 / 4, justifyContent: 'center' }}>
                <Text tyle={{ fontSize: 15, color: '#525E70', fontWeight: 'bold' }}>8:30:00</Text>
              </View>
              <View style={{ flex: 3 / 4, justifyContent: 'center' }}>
                <Text style={{ color: '#7B828C' }}>Ca làm việc bắt đầu</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
});
