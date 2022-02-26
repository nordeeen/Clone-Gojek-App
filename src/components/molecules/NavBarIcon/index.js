import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const NavBarIcon = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={props.onPress}>
        <Image source={props.img} style={{height: 26, width: 26}} />
        <Text
          style={{
            fontSize: 11,
            color: props.active ? '#43AB43' : '#545454',
            marginTop: 4,
          }}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavBarIcon;
