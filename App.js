import React from 'react';
import Route from './src/config/router';
import {LogBox} from 'react-native';

const App = () => {
  return <Route />;
};

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
export default App;
