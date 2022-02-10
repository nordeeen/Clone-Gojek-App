import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


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
