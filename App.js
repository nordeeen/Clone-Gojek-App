import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView automaticallyAdjustsScrollIndicatorInsets={false}>
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
          <View style={styles.wrapperFirstNewsSec}>
            <View style={styles.wrapperImageNews}>
              <Image
                source={require('./dummy/go-news-football.jpg')}
                style={styles.ImageNewsSec}
              />
              <View style={styles.bgTransparent} />
              <Image
                source={require('./logo/logo-gojek-transparent.png')}
                style={styles.logoGojek}
              />
            </View>
            <View style={styles.wrapperTextNews}>
              <Text style={styles.textNewsSec}>go-news timnas</Text>
              <Text style={styles.textDescNews}>
                Daftar Midfilder Timnas Indonesia di AFF CUP 2020
              </Text>
              <TouchableOpacity>
                <View style={styles.btnNews}>
                  <Text style={styles.btnText}>read</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/*INTERNAL INFORMATION SECTION*/}
          <View style={styles.wrapperFirstInternalSec}>
            <View style={styles.wrapperImageInternSec}>
              <Image
                source={require('./logo/logos-gojek.png')}
                style={styles.logoGojekInternalSec}
              />
            </View>
            <Text style={styles.textInternSec}>Connect with Facebook</Text>
            <View style={styles.wrapperFacebookIntern}>
              <View>
                <Image
                  style={styles.imageFacebookIntern}
                  source={require('./dummy/facebook-connect.png')}
                />
              </View>
              <View style={styles.wrapperText}>
                <Text style={styles.firstText}>Connect with Facebook</Text>
                <Text style={styles.secondText}>
                  Log in faster without verification code
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <View style={styles.btnNews}>
                <Text style={styles.btnText}>connect</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.lineBottomIntern} />
          </View>
          {/*GOFOOD BANNER SECTION*/}
          <View style={styles.wrapperGofoodSec}>
            <View style={styles.wrapperSection}>
              <Image
                source={require('./dummy/banner-food.jpg')}
                style={styles.ImageNewsSec}
              />
              <View style={styles.bgTransparent} />
              <Image
                source={require('./logo/logo-gofood.png')}
                style={styles.logoGojek}
              />
              <View style={styles.wrapperDesc}>
                <View>
                  <Text style={styles.textBannerFood}>
                    Free GO-FOOD voucher
                  </Text>
                  <Text style={styles.textDescFood}>
                    Quick, before they run out!
                  </Text>
                </View>
                <View style={styles.wrapperBtnVoucher}>
                  <TouchableOpacity>
                    <View style={styles.btnVoucher}>
                      <Text style={styles.btnVoucherText}>get voucher</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.linesBottom} />
          </View>
        </View>
      </ScrollView>
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
  // NEWS SECTION
  wrapperFirstNewsSec: {
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  ImageNewsSec: {
    height: 170,
    width: '100%',
    borderRadius: 6,
  },
  wrapperTextNews: {
    paddingTop: 16,
    paddingBottom: 20,
    borderBottomColor: '#E8E9ED',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  textNewsSec: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'black',
    marginBottom: 4,
  },
  textDescNews: {
    fontSize: 14,
    fontWeight: '500',
    color: '#7A7A7A',
    marginBottom: 11,
  },
  wrapperImageNews: {
    position: 'relative',
  },
  bgTransparent: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'black',
    opacity: 0.2,
    top: 0,
    left: 0,
    borderRadius: 6,
  },
  logoGojek: {
    height: 15,
    width: 74,
    position: 'absolute',
    top: 16,
    left: 16,
  },
  btnNews: {
    backgroundColor: '#61A756',
    alignSelf: 'flex-end',
    paddingHorizontal: 12,
    paddingVertical: 11,
    borderRadius: 4,
  },
  btnText: {
    fontSize: 13,
    textTransform: 'uppercase',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  // STYLE INTERNAL INFORMATION SECTION
  wrapperFirstInternalSec: {
    padding: 16,
    paddingBottom: 0,
  },
  wrapperImageInternSec: {
    height: 15,
    width: 60,
    marginLeft: -4,
  },
  logoGojekInternalSec: {
    height: 30,
    width: 80,
  },
  imageFacebookIntern: {
    width: 75,
    height: 45,
  },
  wrapperFacebookIntern: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  textInternSec: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1C1C1C',
    marginTop: 18,
    marginBottom: 20,
  },
  wrapperText: {
    marginLeft: 18,
    flex: 1,
  },
  firstText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  secondText: {
    fontSize: 15,
    fontWeight: 'normal',
    color: '#4A4A4A',
    width: '70%',
  },
  lineBottomIntern: {
    borderBottomWidth: 1,
    borderBottomColor: '#E8E9ED',
    marginTop: 16,
  },
  // STYLE GOFOOD BANNER SECTION
  wrapperGofoodSec: {
    padding: 16,
  },
  wrapperSection: {
    position: 'relative',
  },
  wrapperDesc: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  textBannerFood: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  textDescFood: {
    fontSize: 12,
    fontWeight: '500',
    color: 'white',
  },
  wrapperBtnVoucher: {
    flex: 1,
    paddingLeft: 16,
  },
  btnVoucher: {
    backgroundColor: '#61A756',
    alignSelf: 'stretch',
    paddingHorizontal: 12,
    paddingVertical: 11,
    borderRadius: 4,
  },
  btnVoucherText: {
    fontSize: 10,
    textTransform: 'uppercase',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  linesBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#E8E9ED',
    marginBottom: 20,
    marginTop: 16,
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
