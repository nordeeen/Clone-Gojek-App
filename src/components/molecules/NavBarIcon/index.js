import React from 'react';
import {View, Text, Image} from 'react-native';

const NavBarIcon = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image source={props.img} style={{height: 26, width: 26}} />
      <Text style={{fontSize: 11, color: '#545454', marginTop: 4}}>
        {props.title}
      </Text>
    </View>
  );
};

export default NavBarIcon;
