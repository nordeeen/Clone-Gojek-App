import React from 'react';
import {View, Text, Image} from 'react-native';

const ScrollableItems = props => {
  return (
    <View>
      <View style={{height: 150, width: 150}}>
        <Image
          source={props.img}
          style={{
            height: undefined,
            width: undefined,
            resizeMode: 'cover',
            flex: 1,
            borderRadius: 10,
            marginRight: 16,
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#1C1C1C',
          marginTop: 12,
          textAlign: 'center',
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default ScrollableItems;
