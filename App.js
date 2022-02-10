import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import GoBanner from './src/components/molecules/GoBanner';
import GoInfo from './src/components/molecules/GoInfo';
import NewsFeature from './src/components/molecules/NewsFeature';
import SearchFeature from './src/components/molecules/SearchFeature';
import HomeGopayFeature from './src/container/organisms/HomeGopayFeature';
import HomeMainFeature from './src/container/organisms/HomeMainFeature';
import NavBar from './src/container/organisms/NavBar';
import ScrollableProducts from './src/container/organisms/ScrollableProducts';

const App = () => {
  return (
  );
};


export default App;

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={App} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
