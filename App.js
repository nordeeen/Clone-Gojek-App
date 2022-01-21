import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Text style={styles.text}>Clone Gojek App!</Text>
      </View>
      <View style={styles.bottomNav}>
        <View style={styles.colorOne}>
          <Image
            source={require('./icons/home-active.png')}
            style={styles.icons}
          />
          <Text style={styles.font}>Home</Text>
        </View>
        <View style={styles.colorTwo}>
          <Image
            source={require('./icons/order-active.png')}
            style={styles.icons}
          />
          <Text style={styles.font}>Orders</Text>
        </View>
        <View style={styles.colorThree}>
          <Image
            source={require('./icons/help-active.png')}
            style={styles.icons}
          />
          <Text style={styles.font}>Help</Text>
        </View>
        <View style={styles.colorFour}>
          <Image
            source={require('./icons/inbox-active.png')}
            style={styles.icons}
          />
          <Text style={styles.font}>Inbox</Text>
        </View>
        <View style={styles.colorFive}>
          <Image
            source={require('./icons/account-active.png')}
            style={styles.icons}
          />
          <Text style={styles.font}>Account</Text>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginTop: '50%',
  },
  bottomNav: {
    height: 54,
    flexDirection: 'row',
  },
  nav: {
    flex: 1,
    backgroundColor: 'black',
  },
  icons: {
    height: 26,
    width: 26,
  },
  font: {
    fontSize: 11,
    color: '#545454',
    marginTop: 4,
  },
  iconBottomNav: {
    width: 26,
    height: 26,
    backgroundColor: 'white',
  },
  colorOne: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorTwo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorThree: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorFour: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorFive: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
