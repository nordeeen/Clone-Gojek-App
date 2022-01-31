import React from 'react';
import {Text, View, Image} from 'react-native';

const MainFeature = props => {
  return (
    <View style={{width: '25%', alignItems: 'center', marginBottom: 18}}>
      <View
        style={{
          width: 58,
          height: 58,
          borderWidth: 1,
          borderRadius: 18,
          borderColor: '#EFEFEF',
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={props.img} style={{width: 46, height: 46}} />
      </View>
      <Text
        style={{
          fontSize: 11,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 6,
          textTransform: 'uppercase',
        }}>
        {props.name}
      </Text>
    </View>
  );
};

export default MainFeature;
