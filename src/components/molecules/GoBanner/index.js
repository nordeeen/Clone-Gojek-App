import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const GoBanner = () => {
  return (
    <View style={{padding: 16}}>
      <View style={{position: 'relative'}}>
        <Image
          source={require('../../../assets/dummy/banner-food.jpg')}
          style={{height: 170, width: '100%', borderRadius: 6}}
        />
        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundColor: 'black',
            opacity: 0.2,
            top: 0,
            left: 0,
            borderRadius: 6,
          }}
        />
        <Image
          source={require('../../../assets/logo/logo-gofood.png')}
          style={{
            height: 15,
            width: 74,
            position: 'absolute',
            top: 16,
            left: 16,
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingBottom: 16,
          }}>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
                marginBottom: 8,
              }}>
              Free GO-FOOD voucher
            </Text>
            <Text style={{fontSize: 12, fontWeight: '500', color: 'white'}}>
              Quick, before they run out!
            </Text>
          </View>
          <View style={{flex: 1, paddingLeft: 16}}>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: '#61A756',
                  alignSelf: 'stretch',
                  paddingHorizontal: 12,
                  paddingVertical: 11,
                  borderRadius: 4,
                }}>
                <Text
                  style={{
                    fontSize: 10,
                    textTransform: 'uppercase',
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  get voucher
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#E8E9ED',
          marginBottom: 20,
          marginTop: 16,
        }}
      />
    </View>
  );
};

export default GoBanner;
