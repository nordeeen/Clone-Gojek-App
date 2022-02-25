import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createStackNavigator} from '@react-navigation/stack';
import {Home, NewsDetail, OrderDetail, Orders} from '../../container/pages';

const Stack = createNativeStackNavigator();
// const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="HomeStack">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NewsDetail" component={NewsDetail} />
    </Stack.Navigator>
  );
};

const OrderStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="OrderStack">
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="OrderDetail" component={OrderDetail} />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="HomeStack">
        <Stack.Screen name="HomeStack" component={HomeStack} />
        <Stack.Screen name="OrderStack" component={OrderStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
