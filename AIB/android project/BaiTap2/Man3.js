import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, ScrollView, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default class Man1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: '#0795DB', height: 60, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 16, color: '#FFF' }}>Cấu hình chấm công công ty</Text>
          <Image
            style={{ width: 16, height: 16, position: 'absolute', top: 22, left: 10 }}
            source={require('./image/back.png')}
          />
        </View>
        <View style={{ height: 50, flexDirection: 'row' }}>
          <View style={{ flex: 1 / 2, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 14, color: '#0795DB' }}>HÌNH THỨC</Text>
            <View
              style={{ backgroundColor: '#0795DB', height: 5, width: width / 2, position: 'absolute', bottom: 0 }}
            />
          </View>
          <View style={{ flex: 1 / 2, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 14, color: '#969FAB' }}>THỜI GIAN</Text>
          </View>
        </View>
        <View style={{ height: 3, backgroundColor: '#E7E8E8' }} />
        <ScrollView>
          <View style={{ margin: 10, marginTop: 20 }}>
            <View style={{ height: 60 }}>
              <View style={{ flex: 1 / 2, justifyContent: 'center' }}>
                <Text>Hình thức chấm công</Text>
              </View>
              <View style={{ flex: 1 / 2, flexDirection: 'row' }}>
                <View style={{ flex: 9 / 10, justifyContent: 'center' }}>
                  <Text style={{ color: '#313945', fontSize: 16 }}>Chấm công bằng mạng wifi và GPS</Text>
                </View>
                <View style={{ flex: 1 / 10, justifyContent: 'center', alignItems: 'flex-end' }}>
                  <Image style={{ width: 16, height: 16 }} source={require('./image/drop_down.png')} />
                </View>
              </View>
            </View>

            <View style={{ height: 85, marginTop: 30 }}>
              <View style={{ height: 20 }}>
                <Text style={{ fontWeight: 'bold', color: '#969FAB' }}>THIẾT BỊ WIFI</Text>
              </View>
              <View style={{ height: 60, marginTop: 5, flexDirection: 'row' }}>
                <View style={{ flex: 9 / 10, justifyContent: 'center' }}>
                  <View style={{ flex: 1 / 2, justifyContent: 'center' }}>
                    <Text style={{ color: '#313945', fontSize: 16 }}>TP LINK 1E0E</Text>
                  </View>
                  <View style={{ flex: 1 / 2, justifyContent: 'center' }}>
                    <Text>GD:11:22:33:22:34</Text>
                  </View>
                </View>
                <View style={{ flex: 1 / 10, justifyContent: 'center', alignItems: 'center' }}>
                  <Image style={{ width: 16, height: 16 }} source={require('./image/more.png')} />
                </View>
              </View>
            </View>
          </View>
          <View style={{ height: 1, backgroundColor: '#E7E8E8' }} />
          <View
            style={{
              flexDirection: 'row',
              height: 60,

              alignItems: 'center',
              marginLeft: 10,
              marginRight: 10
            }}
          >
            <Image style={{ margin: 10, width: 16, height: 16 }} source={require('./image/add.png')} />
            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#0795DB' }}>THÊM THIẾT BỊ WIFI</Text>
          </View>
          <View style={{ height: 1, backgroundColor: '#E7E8E8' }} />
          <View style={{ marginLeft: 10, height: 85, marginTop: 30 }}>
            <View style={{ height: 20 }}>
              <Text style={{ fontWeight: 'bold', color: '#969FAB' }}>ĐỊA ĐIỂM CHẤM CÔNG</Text>
            </View>
            <View style={{ height: 60, marginTop: 5, flexDirection: 'row' }}>
              <View style={{ flex: 9 / 10, justifyContent: 'center' }}>
                <View style={{ flex: 1 / 2, justifyContent: 'center' }}>
                  <Text style={{ fontWeight: 'bold', color: '#313945', fontSize: 16 }}>Văn phòng A26</Text>
                </View>
                <View style={{ flex: 1 / 2, justifyContent: 'center' }}>
                  <Text>Tố Hữu, Vạn Phúc, Hà Đông, Hà Nội</Text>
                </View>
              </View>
              <View style={{ flex: 1 / 10, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: 16, height: 16 }} source={require('./image/more.png')} />
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              height: 60,

              alignItems: 'center',
              marginLeft: 10,
              marginRight: 10
            }}
          >
            <Image style={{ margin: 10, width: 16, height: 16 }} source={require('./image/add.png')} />
            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#0795DB' }}>THÊM ĐỊA ĐIỂM CHẤM CÔNG</Text>
          </View>
          <View style={{ height: 5, backgroundColor: '#E7E8E8' }} />
          <View style={{ height: 60, margin: 10 }}>
            <View style={{ flex: 1 / 2, justifyContent: 'center' }}>
              <Text>Chế độ chấm công tính lương</Text>
            </View>
            <View style={{ flex: 1 / 2, flexDirection: 'row' }}>
              <View style={{ flex: 9 / 10, justifyContent: 'center' }}>
                <Text style={{ color: '#313945', fontSize: 16 }}>Ca kíp</Text>
              </View>
              <View style={{ flex: 1 / 10, justifyContent: 'center', alignItems: 'flex-end' }}>
                <Image style={{ width: 16, height: 16 }} source={require('./image/drop_down.png')} />
              </View>
            </View>
            <View style={{ height: 1, backgroundColor: '#E7E8E8' }} />
          </View>
          <View style={{ height: 60, margin: 10 }}>
            <View style={{ height: 30, justifyContent: 'center' }}>
              <Text>Số lần chấm công trong ngày</Text>
            </View>
            <View style={{ height: 30, alignItems: 'center' }}>
              <View
                style={{
                  borderColor: '#D8DDE5',
                  flexDirection: 'row',
                  borderRadius: 4,
                  borderWidth: 1,
                  height: 30,
                  width: 320
                }}
              >
                <View
                  style={{
                    flex: 1 / 4,
                    borderLeftWidth: 1,
                    borderColor: '#D8DDE5',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Text style={{ color: '#232C38' }}>1</Text>
                </View>
                <View
                  style={{
                    flex: 1 / 4,
                    borderLeftWidth: 1,
                    borderColor: '#D8DDE5',
                    justifyContent: 'center',
                    backgroundColor: '#0795DB',
                    alignItems: 'center'
                  }}
                >
                  <Text style={{ color: '#FFF' }}>2</Text>
                </View>
                <View
                  style={{
                    flex: 1 / 4,
                    borderLeftWidth: 1,
                    borderColor: '#D8DDE5',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Text style={{ color: '#232C38' }}>3</Text>
                </View>
                <View
                  style={{
                    flex: 1 / 4,
                    borderLeftWidth: 1,
                    borderColor: '#D8DDE5',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Text style={{ color: '#232C38' }}>4</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ height: 60, marginLeft: 10, marginRight: 10 }}>
            <View style={{ height: 30, justifyContent: 'center' }}>
              <Text>Cách tính công trong ngày </Text>
            </View>
            <View style={{ height: 30, alignItems: 'center', flexDirection: 'row' }}>
              <View style={{ flex: 1 / 2, flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ margin: 10, width: 16, height: 16 }} source={require('./image/radSelect.png')} />
                <Text style={{ color: '#232C38', fontSize: 18 }}>Làm tròn</Text>
              </View>
              <View style={{ flex: 1 / 2, flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ margin: 10, width: 16, height: 16 }} source={require('./image/radNonSelect.png')} />
                <Text style={{ color: '#232C38', fontSize: 18 }}>Chính xác</Text>
              </View>
            </View>
          </View>
          <View style={{ height: 60, margin: 10 }}>
            <View style={{ flex: 1 / 2, justifyContent: 'center' }}>
              <Text>Số giờ làm việc tối thiểu để chấm công</Text>
            </View>
            <View style={{ flex: 1 / 2, flexDirection: 'row' }}>
              <View style={{ flex: 9 / 10, justifyContent: 'center' }}>
                <Text style={{ color: '#313945', fontSize: 16 }}>8 giờ</Text>
              </View>
              <View style={{ flex: 1 / 10, justifyContent: 'center', alignItems: 'flex-end' }}>
                <Image style={{ width: 16, height: 16 }} source={require('./image/drop_down.png')} />
              </View>
            </View>
          </View>
          <View style={{ height: 1, backgroundColor: '#E7E8E8', marginLeft: 10, marginRight: 10 }} />
          <View style={{ height: 60, margin: 10 }}>
            <View style={{ flex: 1 / 2, justifyContent: 'center' }}>
              <Text>Cho phép đi muộn về sớm</Text>
            </View>
            <View style={{ flex: 1 / 2, flexDirection: 'row' }}>
              <View style={{ flex: 9 / 10, justifyContent: 'center' }}>
                <Text style={{ color: '#313945', fontSize: 16 }}>5 phút</Text>
              </View>
              <View style={{ flex: 1 / 10, justifyContent: 'center', alignItems: 'flex-end' }}>
                <Image style={{ width: 16, height: 16 }} source={require('./image/drop_down.png')} />
              </View>
            </View>
          </View>
          <View style={{ height: 1, backgroundColor: '#E7E8E8', marginLeft: 10, marginRight: 10 }} />

          <View style={{ height: 60, flexDirection: 'row', marginLeft: 10, alignItems: 'center', marginRight: 10 }}>
            <View style={{ flex: 8 / 9 }}>
              <Text>Kiểm soát đi muộn về sớm</Text>
            </View>
            <View style={{ flex: 1 / 9 }}>
              <Image style={{ width: 24, height: 16 }} source={require('./image/toggleOff.png')} />
            </View>
          </View>
          <View style={{ height: 1, backgroundColor: '#E7E8E8' }} />
          <View
            style={{
              height: 60,
              flexDirection: 'row',
              marginLeft: 10,
              alignItems: 'center',
              marginRight: 10
            }}
          >
            <View style={{ flex: 8 / 9 }}>
              <Text>Kiểm soát đi muộn về sớm</Text>
            </View>
            <View style={{ flex: 1 / 9 }}>
              <Image style={{ width: 24, height: 16 }} source={require('./image/toggleOff.png')} />
            </View>
          </View>
          <View style={{ height: 1, backgroundColor: '#E7E8E8' }} />
          <View style={{ height: 60, flexDirection: 'row', marginLeft: 10, marginRight: 10, alignItems: 'center' }}>
            <View style={{ flex: 8 / 9 }}>
              <Text>Kiểm soát đi muộn về sớm</Text>
            </View>
            <View style={{ flex: 1 / 9 }}>
              <Image style={{ width: 24, height: 16 }} source={require('./image/toggleOff.png')} />
            </View>
          </View>
          <View style={{ height: 60, justifyContent: 'center', alignItems: 'center' }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 40,
                width: 150,
                borderColor: '#0795DB',
                borderRadius: 30,
                borderWidth: 1
              }}
            >
              <Text style={{ color: '#0795DB' }}>LƯU THÔNG TIN</Text>
            </View>
          </View>
          <View style={{ height: 1, backgroundColor: '#E7E8E8' }} />
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
