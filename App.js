import React from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        {/* SEARCH BAR */}
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
        {/* GOPAY */}
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
        {/* MAIN FEATURE */}
        <View style={styles.wrapperMainFeature}>
          <View style={styles.wrapperFirstMain}>
            <View style={styles.wrapperBoxMainFeature}>
              <View style={styles.boxMainFeature}>
                <Image
                  source={require('./icons/go-ride.png')}
                  style={styles.logoPicMain}
                />
              </View>
              <Text style={styles.fontBox}>go-ride</Text>
            </View>
            <View style={styles.wrapperBoxMainFeature}>
              <View style={styles.boxMainFeature}>
                <Image
                  source={require('./icons/go-car.png')}
                  style={styles.logoPicMain}
                />
              </View>
              <Text style={styles.fontBox}>go-car</Text>
            </View>
            <View style={styles.wrapperBoxMainFeature}>
              <View style={styles.boxMainFeature}>
                <Image
                  source={require('./icons/go-bluebird.png')}
                  style={styles.logoPicMain}
                />
              </View>
              <Text style={styles.fontBox}>go-bluebird</Text>
            </View>
            <View style={styles.wrapperBoxMainFeature}>
              <View style={styles.boxMainFeature}>
                <Image
                  source={require('./icons/go-send.png')}
                  style={styles.logoPicMain}
                />
              </View>
              <Text style={styles.fontBox}>go-send</Text>
            </View>
          </View>
          <View style={styles.wrapperSecondMain}>
            <View style={styles.wrapperBoxMainFeature}>
              <View style={styles.boxMainFeature}>
                <Image
                  source={require('./icons/go-deal.png')}
                  style={styles.logoPicMain}
                />
              </View>
              <Text style={styles.fontBox}>go-deals</Text>
            </View>
            <View style={styles.wrapperBoxMainFeature}>
              <View style={styles.boxMainFeature}>
                <Image
                  source={require('./icons/go-pulsa.png')}
                  style={styles.logoPicMain}
                />
              </View>
              <Text style={styles.fontBox}>go-pulsa</Text>
            </View>
            <View style={styles.wrapperBoxMainFeature}>
              <View style={styles.boxMainFeature}>
                <Image
                  source={require('./icons/go-food.png')}
                  style={styles.logoPicMain}
                />
              </View>
              <Text style={styles.fontBox}>go-food</Text>
            </View>
            <View style={styles.wrapperBoxMainFeature}>
              <View style={styles.boxMainFeature}>
                <Image
                  source={require('./icons/go-more.png')}
                  style={styles.logoPicMain}
                />
              </View>
              <Text style={styles.fontBox}>more</Text>
            </View>
          </View>
        </View>
        <View style={styles.lines} />
        {/*NEWS SECTION */}
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
  // STYLE SEARCH BAR
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
  // STYLE PROMO SECTION
  wrapperIconPromo: {
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconPromo: {
    width: 42,
    height: 34,
  },
  // STYLE GOPAY SECTION
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
  // STYLE MAIN FEATURE
  wrapperMainFeature: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 18,
  },
  logoPicMain: {
    width: 46,
    height: 46,
  },
  fontBox: {
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 6,
    textTransform: 'uppercase',
  },
  lines: {
    height: 17,
    backgroundColor: '#F2F2F4',
    marginTop: 20,
  },
  wrapperFirstMain: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 18,
  },
  wrapperSecondMain: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  wrapperBoxMainFeature: {
    width: '25%',
    alignItems: 'center',
  },
  boxMainFeature: {
    width: 58,
    height: 58,
    borderWidth: 1,
    borderRadius: 18,
    borderColor: '#EFEFEF',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // STYLE BOTTOM NAV
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
