import React from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <View style={styles.wrapperBar}>
          <View style={styles.wrapperInputSearch}>
            <TextInput
              placeholder="What do you want to me"
              style={styles.inputSearch}
            />
            <Image
              source={require('./icons/search.png')}
              style={styles.iconSearch}
            />
          </View>
          <View style={styles.wrapperIconPromo}>
            <Image
              source={require('./icons/promo.png')}
              style={styles.iconPromo}
            />
          </View>
        </View>
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
    backgroundColor: 'white',
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
  wrapperBar: {
    paddingTop: 15,
    marginHorizontal: 17,
    flexDirection: 'row',
  },
  iconSearch: {
    width: 27,
    height: 27,
    position: 'absolute',
    top: 7,
    left: 12,
    backgroundColor: 'white',
  },
  wrapperIconPromo: {
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconPromo: {
    width: 34,
    height: 34,
  },
  wrapperInputSearch: {
    position: 'relative',
    flex: 1,
  },
  inputSearch: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 25,
    height: 40,
    fontSize: 13,
    paddingLeft: 55,
    paddingRight: 20,
    backgroundColor: 'white',
    marginRight: 15,
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
