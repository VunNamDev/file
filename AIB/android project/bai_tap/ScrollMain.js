import React, { Component } from 'react';
import { Image, Button, StyleSheet, Text, View, ScrollView, Picker, PickerItem, Switch } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

export default class Scroll extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ padding: 10, height: 170 }}>
            <View>
              <Text style={styles.hinhThuc}> Hình thức chấm công </Text>
              <Picker style={{ color: '#232c38' }}>
                <Picker.Item value="both" label="Chấm công bằng mạng wifi và GPS" />
                <Picker.Item value="both" label="Chấm công bằng mạng wifi và GPS2" />
                <Picker.Item value="both" label="Chấm công bằng mạng wifi và GPS3" />
              </Picker>
            </View>
            <View style={{ marginTop: 20, flex: 1 }}>
              <Text style={styles.hinhThuc}> Thiết bị wifi </Text>
              <View style={{ padding: 10, flexDirection: 'row', height: 70 }}>
                <View style={{ flex: 1 / 2 }}>
                  <View style={{ flex: 1 / 2 }}>
                    <Text style={{ color: '#232c38', fontSize: 14, fontWeight: 'bold' }}>TPLINK 1E0E</Text>
                  </View>
                  <View style={{ flex: 1 / 2 }}>
                    <Text style={{ color: '#7E848E', fontSize: 10 }}>TPLINK 1E0E</Text>
                  </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'flex-end', flex: 1 / 2 }}>
                  <Image style={{ width: 16, height: 16 }} source={require('./image/more.png')} />
                </View>
              </View>
            </View>
          </View>
          <View style={{ height: 2, backgroundColor: '#e8ebf0' }} />
          <View
            style={{
              flexDirection: 'row',
              height: 50,
              justifyContent: 'center',
              padding: 10
            }}
          >
            <View style={{ flex: 1 / 10, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={{ width: 16, height: 16 }} source={require('./image/add.png')} />
            </View>
            <View style={{ flex: 9 / 10, justifyContent: 'center' }}>
              <Text style={{ color: '#0795db', fontSize: 14 }}>THÊM THIẾT BỊ WIFI</Text>
            </View>
          </View>

          <View style={{ height: 2, backgroundColor: '#e8ebf0' }} />
          <View style={{ padding: 10, height: 110 }}>
            <View style={{ marginTop: 20, flex: 1 }}>
              <Text style={styles.hinhThuc}> Địa điểm chấm công </Text>
              <View style={{ padding: 10, flexDirection: 'row', height: 70 }}>
                <View style={{ flex: 1 / 2 }}>
                  <View style={{ flex: 1 / 2 }}>
                    <Text style={{ color: '#232c38', fontSize: 14, fontWeight: 'bold' }}>Văn phòng A162</Text>
                  </View>
                  <View style={{ flex: 1 / 2 }}>
                    <Text style={{ color: '#7E848E', fontSize: 10 }}>Tố Hữu, Vạn Phúc, Đống Đa, Hà Nội</Text>
                  </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'flex-end', flex: 1 / 2 }}>
                  <Image style={{ width: 16, height: 16 }} source={require('./image/more.png')} />
                </View>
              </View>
            </View>
          </View>
          <View style={{ height: 2, backgroundColor: '#e8ebf0' }} />
          <View
            style={{
              flexDirection: 'row',
              height: 50,
              justifyContent: 'center',
              padding: 10
            }}
          >
            <View style={{ flex: 1 / 10, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={{ width: 16, height: 16 }} source={require('./image/add.png')} />
            </View>
            <View style={{ flex: 9 / 10, justifyContent: 'center' }}>
              <Text style={{ color: '#0795db', fontSize: 14 }}>THÊM ĐỊA ĐIỂM CHẤM CÔNG</Text>
            </View>
          </View>
          <View style={{ height: 5, backgroundColor: '#e8ebf0' }} />
          <View style={{ padding: 10, height: 62 }}>
            <View style={{ height: 60 }}>
              <Text style={styles.hinhThuc}> Chế độ chấm công tính lương </Text>
              <Picker style={{ color: '#232c38' }}>
                <Picker.Item value="both" label="Ca kíp" />
                <Picker.Item value="both" label="Chấm công bằng mạng wifi và GPS2" />
                <Picker.Item value="both" label="Chấm công bằng mạng wifi và GPS3" />
              </Picker>
              <View style={{ height: 2, backgroundColor: '#e8ebf0' }} />
            </View>
          </View>
          <View style={{ height: 80, marginTop: 40, padding: 10 }}>
            <Text style={[styles.hinhThuc, { marginBottom: 10 }]}> Số lần chấm công trong ngày </Text>
            <SegmentedControlTab values={['1 lần', '2 lần', '3 lần', '4 lần']} />
            {/* tab moi */}
          </View>
          <View style={{ height: 80, padding: 10 }}>
            <Text style={[styles.hinhThuc, { height: 20, marginBottom: 10 }]}> Cách tính công trong ngày </Text>
            <View style={{ height: 60, flexDirection: 'row' }}>
              <View style={{ flex: 1 / 2, flexDirection: 'row' }}>
                <Image source={require('./image/radio.png')} />
                <Text style={{ marginLeft: 10, color: '#232c38', fontSize: 14 }}>Quy tròn </Text>
              </View>
              <View style={{ flex: 1 / 2, flexDirection: 'row' }}>
                <Image source={require('./image/radio.png')} />
                <Text style={{ marginLeft: 10, color: '#232c38', fontSize: 14 }}>Chính xác</Text>
              </View>
            </View>
          </View>
          <View style={{ height: 70, padding: 10 }}>
            <Text style={{ height: 20, fontSize: 14 }}>Số giờ làm việc tối thiểu để tính công</Text>
            <View style={{ height: 48, flexDirection: 'row' }}>
              <View style={{ flex: 1 / 2, justifyContent: 'center' }}>
                <Text style={{ color: '#232c38', fontSize: 16 }}>8 giờ</Text>
              </View>
              <View style={{ flex: 1 / 2, justifyContent: 'center', alignItems: 'flex-end' }}>
                <Image source={require('./image/down.png')} />
              </View>
            </View>
            <View style={{ height: 2, backgroundColor: '#e8ebf0' }} />
          </View>
          <View style={{ height: 70, padding: 10 }}>
            <Text style={{ height: 20, fontSize: 14 }}>Cho phép đi muộn về sớm</Text>
            <View style={{ height: 48, flexDirection: 'row' }}>
              <View style={{ flex: 1 / 2, justifyContent: 'center' }}>
                <Text style={{ color: '#232c38', fontSize: 16 }}>5 phút</Text>
              </View>
              <View style={{ flex: 1 / 2, justifyContent: 'center', alignItems: 'flex-end' }}>
                <Image source={require('./image/down.png')} />
              </View>
            </View>
            <View style={{ height: 2, backgroundColor: '#e8ebf0' }} />
          </View>
          <View style={{ height: 70, padding: 10 }}>
            <View style={{ height: 68, flexDirection: 'row' }}>
              <View style={{ flex: 2 / 3, justifyContent: 'center' }}>
                <Text style={{ color: '#232c38', fontSize: 16 }}>Kiểm soát đi muộn về sớm</Text>
              </View>
              <View style={{ flex: 1 / 3, justifyContent: 'center', alignItems: 'flex-end' }}>
                <Image style={{ height: 16, width: 27 }} source={require('./image/toggleOff.png')} />
              </View>
            </View>
            <View style={{ height: 2, backgroundColor: '#e8ebf0' }} />
          </View>
          <View style={{ height: 70, padding: 10 }}>
            <View style={{ height: 68, flexDirection: 'row' }}>
              <View style={{ flex: 2 / 3, justifyContent: 'center' }}>
                <Text style={{ color: '#232c38', fontSize: 16 }}>Tự động checkout cuối giờ</Text>
              </View>
              <View style={{ flex: 1 / 3, justifyContent: 'center', alignItems: 'flex-end' }}>
                <Image style={{ height: 16, width: 27 }} source={require('./image/toggleOff.png')} />
              </View>
            </View>
            <View style={{ height: 2, backgroundColor: '#e8ebf0' }} />
          </View>
          <View style={{ height: 70, padding: 10 }}>
            <View style={{ height: 68, flexDirection: 'row' }}>
              <View style={{ flex: 2 / 3, justifyContent: 'center' }}>
                <Text style={{ color: '#232c38', fontSize: 16 }}>Kiểm soát thiết bị chấm công</Text>
              </View>
              <View style={{ flex: 1 / 3, justifyContent: 'center', alignItems: 'flex-end', marginLeft: 10 }}>
                <Image style={{ height: 16, width: 27 }} source={require('./image/toggleOff.png')} />
              </View>
            </View>
          </View>
          <View style={{ height: 2, backgroundColor: '#e8ebf0' }} />
          <View style={{ height: 70, alignItems: 'center', justifyContent: 'center' }}>
            <Text
              style={{
                color: '#0795db',
                fontWeight: 'bold',
                textAlign: 'center',
                lineHeight: 40,
                width: 170,
                height: 40,
                borderColor: '#0795db',
                borderRadius: 40,
                borderWidth: 1
              }}
            >
              Lưu thông tin
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  hinhThuc: {
    color: '#696969'
  }
});
