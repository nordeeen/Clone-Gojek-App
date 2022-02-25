import React from 'react';
import {View, Button} from 'react-native';

const Orders = ({navigation}) => {
  return (
    <View>
      {/* <Text>Orders Page</Text>; */}
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate('OrderDetail')}
      />
    </View>
  );
};

export default Orders;
