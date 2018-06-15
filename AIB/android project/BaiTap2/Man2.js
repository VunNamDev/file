import React, { Component } from 'react';
import { ScrollView, Platform, StyleSheet, Text, View, Image, Button } from 'react-native';

export default class Man1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: '#0795DB', height: 60, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18 }}>Thông tin nhân sự</Text>
          <Image
            style={{ width: 16, height: 16, position: 'absolute', top: 22, left: 10 }}
            source={require('./image/back.png')}
          />
        </View>
        <ScrollView>
          <View style={{ height: 40, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#7B828C', fontSize: 18 }}>ẢNH ĐẠI DIỆN</Text>
          </View>
          <View style={{ height: 140, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ borderRadius: 64, width: 128, height: 128 }} source={require('./image/gai.jpg')} />
          </View>
          <View style={{ height: 40, alignItems: 'center', justifyContent: 'center' }}>
            <View
              style={{
                height: 30,
                width: 120,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 2,
                borderColor: '#0795DB'
              }}
            >
              <Text
                style={{
                  color: '#0795DB'
                }}
              >
                THAY ĐỔI
              </Text>
            </View>
          </View>
          <View style={{ margin: 10 }}>
            <View style={{ height: 70, marginTop: 40 }}>
              <View style={{ height: 29, justifyContent: 'center' }}>
                <Text style={{ fontSize: 14, color: '#7B828C' }}>Mã nhân viên</Text>
              </View>
              <View style={{ height: 40, justifyContent: 'center' }}>
                <Text style={{ fontSize: 16, color: '#232C38' }}>MS12131</Text>
              </View>
              <View style={{ height: 1, backgroundColor: '#E0E0E0' }} />
            </View>
            <View style={{ height: 70, marginTop: 20 }}>
              <View style={{ height: 29, justifyContent: 'center' }}>
                <Text style={{ fontSize: 14, color: '#7B828C' }}>Họ tên</Text>
              </View>
              <View style={{ height: 40, justifyContent: 'center' }}>
                <Text style={{ fontSize: 16, color: '#232C38' }}>Nguyễn Thu Trang</Text>
              </View>
              <View style={{ height: 1, backgroundColor: '#E0E0E0' }} />
            </View>
            <View style={{ height: 70, marginTop: 10 }}>
              <View style={{ height: 29, justifyContent: 'center' }}>
                <Text style={{ fontSize: 14, color: '#7B828C' }}>Giới tính</Text>
              </View>
              <View style={{ height: 40, justifyContent: 'center', flexDirection: 'row' }}>
                <View style={{ flex: 1 / 2 }}>
                  <Text style={{ fontSize: 16, color: '#232C38' }}>Nữ</Text>
                </View>
                <View style={{ flex: 1 / 2, alignItems: 'flex-end', marginRight: 10 }}>
                  <Image style={{ width: 16, height: 16 }} source={require('./image/drop_down.png')} />
                </View>
              </View>
              <View style={{ height: 1, backgroundColor: '#E0E0E0' }} />
            </View>
            <View style={{ height: 70, marginTop: 10 }}>
              <View style={{ height: 29, justifyContent: 'center' }}>
                <Text style={{ fontSize: 14, color: '#7B828C' }}>Ngày sinh</Text>
              </View>
              <View style={{ height: 40, justifyContent: 'center', flexDirection: 'row' }}>
                <View style={{ flex: 1 / 2 }}>
                  <Text style={{ fontSize: 16, color: '#232C38' }}>03/11/1997</Text>
                </View>
                <View style={{ flex: 1 / 2, alignItems: 'flex-end', marginRight: 10 }}>
                  <Image style={{ width: 16, height: 17 }} source={require('./image/calanda.png')} />
                </View>
              </View>
              <View style={{ height: 1, backgroundColor: '#E0E0E0' }} />
            </View>
            <View style={{ height: 70, marginTop: 20 }}>
              <View style={{ height: 29, justifyContent: 'center' }}>
                <Text style={{ fontSize: 14, color: '#7B828C' }}>Mức lương</Text>
              </View>
              <View style={{ height: 40, justifyContent: 'center' }}>
                <Text style={{ fontSize: 16, color: '#232C38' }}>8.000.000</Text>
              </View>
              <View style={{ height: 1, backgroundColor: '#E0E0E0' }} />
            </View>
            <View style={{ height: 70, marginTop: 10 }}>
              <View style={{ height: 29, justifyContent: 'center' }}>
                <Text style={{ fontSize: 14, color: '#7B828C' }}>Ngày kí hợp đồng</Text>
              </View>
              <View style={{ height: 40, justifyContent: 'center', flexDirection: 'row' }}>
                <View style={{ flex: 1 / 2 }}>
                  <Text style={{ fontSize: 16, color: '#232C38' }}>03/11/2001</Text>
                </View>
                <View style={{ flex: 1 / 2, alignItems: 'flex-end', marginRight: 10 }}>
                  <Image style={{ width: 16, height: 17 }} source={require('./image/calanda.png')} />
                </View>
              </View>
              <View style={{ height: 1, backgroundColor: '#E0E0E0' }} />
            </View>
            <View style={{ height: 70, marginTop: 10 }}>
              <View style={{ height: 29, justifyContent: 'center' }}>
                <Text style={{ fontSize: 14, color: '#7B828C' }}>Thời hàn hợp đồng</Text>
              </View>
              <View style={{ height: 40, justifyContent: 'center', flexDirection: 'row' }}>
                <View style={{ flex: 1 / 2 }}>
                  <Text style={{ fontSize: 16, color: '#232C38' }}>03/11/1997</Text>
                </View>
                <View style={{ flex: 1 / 2, alignItems: 'flex-end', marginRight: 10 }}>
                  <Image style={{ width: 16, height: 17 }} source={require('./image/calanda.png')} />
                </View>
              </View>
              <View style={{ height: 1, backgroundColor: '#E0E0E0' }} />
            </View>
            <View style={{ height: 70, marginTop: 10 }}>
              <View style={{ height: 29, justifyContent: 'center' }}>
                <Text style={{ fontSize: 14, color: '#7B828C' }}>Phòng ban</Text>
              </View>
              <View style={{ height: 40, justifyContent: 'center', flexDirection: 'row' }}>
                <View style={{ flex: 1 / 2 }}>
                  <Text style={{ fontSize: 16, color: '#232C38' }}>Phòng kinh doanh</Text>
                </View>
                <View style={{ flex: 1 / 2, alignItems: 'flex-end', marginRight: 10 }}>
                  <Image style={{ width: 16, height: 16 }} source={require('./image/drop_down.png')} />
                </View>
              </View>
              <View style={{ height: 1, backgroundColor: '#E0E0E0' }} />
            </View>
            <View style={{ height: 70, marginTop: 10 }}>
              <View style={{ height: 29, justifyContent: 'center' }}>
                <Text style={{ fontSize: 14, color: '#7B828C' }}>Chức vụ</Text>
              </View>
              <View style={{ height: 40, justifyContent: 'center', flexDirection: 'row' }}>
                <View style={{ flex: 1 / 2 }}>
                  <Text style={{ fontSize: 16, color: '#232C38' }}>Nhân viên</Text>
                </View>
                <View style={{ flex: 1 / 2, alignItems: 'flex-end', marginRight: 10 }}>
                  <Image style={{ width: 16, height: 16 }} source={require('./image/drop_down.png')} />
                </View>
              </View>
              <View style={{ height: 1, backgroundColor: '#E0E0E0' }} />
            </View>
            <View style={{ height: 70, marginTop: 20 }}>
              <View style={{ height: 29, justifyContent: 'center' }}>
                <Text style={{ fontSize: 14, color: '#7B828C' }}>Chế độ</Text>
              </View>
              <View style={{ height: 40, justifyContent: 'center' }}>
                <Text style={{ fontSize: 16, color: '#232C38' }}>Bao cơm ăn</Text>
              </View>
              <View style={{ height: 1, backgroundColor: '#E0E0E0' }} />
            </View>
          </View>
          <View style={{ backgroundColor: '#0795DB', height: 60, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#FFF', fontSize: 18 }}>Lưu thông tin</Text>
          </View>
        </ScrollView>
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
