import React from 'react';
import {TextInput, View, Image} from 'react-native';

const SearchFeature = () => {
  return (
    <View style={{paddingTop: 15, marginHorizontal: 17, flexDirection: 'row'}}>
      <View style={{position: 'relative', flex: 1}}>
        <TextInput
          placeholder="What do you want to me"
          style={{
            borderWidth: 1,
            borderColor: '#E8E8E8',
            borderRadius: 25,
            height: 40,
            fontSize: 13,
            paddingLeft: 55,
            paddingRight: 20,
            backgroundColor: 'white',
            marginRight: 15,
          }}
        />
        <Image
          source={require('../../../assets/icons/search.png')}
          style={{
            width: 27,
            height: 27,
            position: 'absolute',
            top: 7,
            left: 12,
            backgroundColor: 'white',
          }}
        />
      </View>
      <View style={{width: 35, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={require('../../../assets/icons/promo.png')}
          style={{width: 42, height: 34}}
        />
      </View>
    </View>
  );
};

export default SearchFeature;
