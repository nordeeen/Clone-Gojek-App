import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const GoInfo = () => {
  return (
    <View style={{padding: 16, paddingBottom: 0}}>
      <View style={{height: 15, width: 60, marginLeft: -4}}>
        <Image
          source={require('../../../assets/logo/logos-gojek.png')}
          style={{height: 30, width: 80}}
        />
      </View>
      <Text
        style={{
          fontSize: 17,
          fontWeight: 'bold',
          color: '#1C1C1C',
          marginTop: 18,
          marginBottom: 20,
        }}>
        Connect with Facebook
      </Text>
      <View style={{flexDirection: 'row', marginBottom: 16}}>
        <View>
          <Image
            style={{width: 75, height: 45}}
            source={require('../../../assets/dummy/facebook-connect.png')}
          />
        </View>
        <View style={{marginLeft: 18, flex: 1}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4A4A4A'}}>
            Connect with Facebook
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'normal',
              color: '#4A4A4A',
              width: '70%',
            }}>
            Log in faster without verification code
          </Text>
        </View>
      </View>
      <TouchableOpacity>
        <View
          style={{
            backgroundColor: '#61A756',
            alignSelf: 'flex-end',
            paddingHorizontal: 12,
            paddingVertical: 11,
            borderRadius: 4,
          }}>
          <Text
            style={{
              fontSize: 13,
              textTransform: 'uppercase',
              color: 'white',
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            connect
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#E8E9ED',
          marginTop: 16,
        }}
      />
    </View>
  );
};

export default GoInfo;
