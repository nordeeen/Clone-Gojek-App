import {Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const NewsFeature = ({onPress}) => {
  return (
    <View style={{paddingTop: 16, paddingHorizontal: 16}}>
      <View style={{position: 'relative'}}>
        <Image
          source={require('../../../assets/dummy/go-news-football.jpg')}
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
          source={require('../../../assets/logo/logo-gojek-transparent.png')}
          style={{
            height: 15,
            width: 74,
            position: 'absolute',
            top: 16,
            left: 16,
          }}
        />
      </View>
      <View
        style={{
          paddingTop: 16,
          paddingBottom: 20,
          borderBottomColor: '#E8E9ED',
          borderBottomWidth: 1,
          marginBottom: 20,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: 'black',
            marginBottom: 4,
          }}>
          go-news
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '500',
            color: '#7A7A7A',
            marginBottom: 11,
          }}>
          Gelandang Timnas Indonesia di era Shin Tae Yong
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#61A756',
            alignSelf: 'flex-end',
            paddingHorizontal: 12,
            paddingVertical: 11,
            borderRadius: 4,
          }}
          onPress={onPress}>
          <Text
            style={{
              fontSize: 13,
              textTransform: 'uppercase',
              color: 'white',
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            read
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewsFeature;
