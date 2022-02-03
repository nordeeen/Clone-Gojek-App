import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import GopayFeature from '../../../components/molecules/GopayFeature';

class HomeGopayFeature extends Component {
  render() {
    return (
      <View style={{marginHorizontal: 17, marginTop: 8}}>
        <View
          style={{
            backgroundColor: '#2C5FB8',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 14,
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
          }}>
          <Image
            source={require('../../../assets/icons/gopay.png')}
            style={{width: 100, height: 26}}
          />
          <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
            Rp 50.0000
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#2F65BD',
            paddingTop: 18,
            paddingBottom: 14,
            flexDirection: 'row',
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
          }}>
          <GopayFeature
            image={require('../../../assets/icons/pay.png')}
            title="Pay"
          />
          <GopayFeature
            image={require('../../../assets/icons/nearby.png')}
            title="Nearby"
          />
          <GopayFeature
            image={require('../../../assets/icons/top-up.png')}
            title="Top Up"
          />
          <GopayFeature
            image={require('../../../assets/icons/more.png')}
            title="More"
          />
        </View>
      </View>
    );
  }
}

export default HomeGopayFeature;
