import React from 'react';
import {Text, View, Image} from 'react-native';

const GopayFeature = props => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Image source={props.image} style={{width: 36, height: 36}} />
      <Text
        style={{
          fontSize: 14,
          fontWeight: 'bold',
          marginTop: 15,
          color: 'white',
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default GopayFeature;
