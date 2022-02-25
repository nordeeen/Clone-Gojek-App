import React from 'react';
import {Text, View, Button} from 'react-native';

const Orders = () => {
  return (
    <View>
      <Text>Orders Page</Text>;
      <Button title="Go to Detail" onPress={() => alert('test')} />
    </View>
  );
};

export default Orders;
