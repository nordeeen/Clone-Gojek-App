import React from 'react';
import {Text, View, Button} from 'react-native';

const Orders = ({navigation}) => {
  return (
    <View>
      {undefined !== 0 && <Text>Orders Page</Text>}
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate('OrderDetail')}
      />
    </View>
  );
};

export default Orders;
