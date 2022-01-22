import React from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        {/* Search Bar*/}
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
        {/* Gopay */}
        <View style={styles.wrapperFirstSectionGopay}>
          <View style={styles.wrapperSectionGopay}>
            <Image
              source={require('./icons/gopay.png')}
              style={styles.iconGopay}
            />
            <Text style={styles.textGopay}>Rp 50.0000</Text>
          </View>
          <View style={styles.wrapperSecondSectionGopay}>
            <View style={styles.iconSecGopayOne}>
              <Image
                source={require('./icons/pay.png')}
                style={styles.iconPictureGopay}
              />
              <Text style={styles.textSecGopay}>Pay</Text>
            </View>
            <View style={styles.iconSecGopayTwo}>
              <Image
                source={require('./icons/nearby.png')}
                style={styles.iconPictureGopay}
              />
              <Text style={styles.textSecGopay}>Nearby</Text>
            </View>
            <View style={styles.iconSecGopayThree}>
              <Image
                source={require('./icons/top-up.png')}
                style={styles.iconPictureGopay}
              />
              <Text style={styles.textSecGopay}>Top Up</Text>
            </View>
            <View style={styles.iconSecGopayFour}>
              <Image
                source={require('./icons/more.png')}
                style={styles.iconPictureGopay}
              />
              <Text style={styles.textSecGopay}>More</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomNav}>
        <View style={styles.iconOne}>
          <Image
            source={require('./icons/home-active.png')}
            style={styles.icons}
          />
          <Text style={styles.font}>Home</Text>
        </View>
        <View style={styles.iconTwo}>
          <Image
            source={require('./icons/order-active.png')}
            style={styles.icons}
          />
          <Text style={styles.font}>Orders</Text>
        </View>
        <View style={styles.iconThree}>
          <Image
            source={require('./icons/help-active.png')}
            style={styles.icons}
          />
          <Text style={styles.font}>Help</Text>
        </View>
        <View style={styles.iconFour}>
          <Image
            source={require('./icons/inbox-active.png')}
            style={styles.icons}
          />
          <Text style={styles.font}>Inbox</Text>
        </View>
        <View style={styles.iconFive}>
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
  nav: {
    flex: 1,
    backgroundColor: 'white',
  },
  // Style Search Bar
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
  // Style Promo section
  // commit revisi styling search and promo
  wrapperIconPromo: {
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconPromo: {
    width: 42,
    height: 34,
  },
  // Style Gopay Section
  // commit adding gopay feature section
  wrapperFirstSectionGopay: {
    marginHorizontal: 17,
    marginTop: 8,
  },
  wrapperSectionGopay: {
    backgroundColor: '#2C5FB8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 14,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  iconGopay: {
    width: 100,
    height: 26,
  },
  textGopay: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  wrapperSecondSectionGopay: {
    backgroundColor: '#2F65BD',
    paddingTop: 18,
    paddingBottom: 14,
    flexDirection: 'row',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  iconPictureGopay: {
    width: 36,
    height: 36,
  },
  textSecGopay: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 15,
    color: 'white',
  },
  iconSecGopayOne: {
    flex: 1,
    alignItems: 'center',
  },
  iconSecGopayTwo: {
    flex: 1,
    alignItems: 'center',
  },
  iconSecGopayThree: {
    flex: 1,
    alignItems: 'center',
  },
  iconSecGopayFour: {
    flex: 1,
    alignItems: 'center',
  },
  // Style Bottom Nav
  // commit revisi styling bottom nav
  bottomNav: {
    height: 54,
    flexDirection: 'row',
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
  iconOne: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconTwo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconThree: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconFour: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconFive: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
