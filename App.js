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
import GopayFeature from './src/components/molecules/GopayFeature';
import MainFeature from './src/components/molecules/MainFeature';

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.nav}>
          {/* SEARCH BAR */}
          <View style={styles.wrapperBar}>
            <View style={styles.wrapperInputSearch}>
              <TextInput
                placeholder="What do you want to me"
                style={styles.inputSearch}
              />
              <Image
                source={require('./src/assets/icons/search.png')}
                style={styles.iconSearch}
              />
            </View>
            <View style={styles.wrapperIconPromo}>
              <Image
                source={require('./src/assets/icons/promo.png')}
                style={styles.iconPromo}
              />
            </View>
          </View>
          {/* GOPAY */}
          <View style={styles.wrapperFirstSectionGopay}>
            <View style={styles.wrapperSectionGopay}>
              <Image
                source={require('./src/assets/icons/gopay.png')}
                style={styles.iconGopay}
              />
              <Text style={styles.textGopay}>Rp 50.0000</Text>
            </View>
            <View style={styles.wrapperSecondSectionGopay}>
              <GopayFeature
                image={require('./src/assets/icons/pay.png')}
                title="Pay"
              />
              <GopayFeature
                image={require('./src/assets/icons/nearby.png')}
                title="Nearby"
              />
              <GopayFeature
                image={require('./src/assets/icons/top-up.png')}
                title="Top Up"
              />
              <GopayFeature
                image={require('./src/assets/icons/more.png')}
                title="More"
              />
            </View>
          </View>
          {/* MAIN FEATURE */}
          <View style={styles.wrapperMainFeature}>
            <MainFeature
              img={require('./src/assets/icons/go-ride.png')}
              name="go-ride"
            />
            <MainFeature
              img={require('./src/assets/icons/go-car.png')}
              name="go-car"
            />
            <MainFeature
              img={require('./src/assets/icons/go-bluebird.png')}
              name="go-bluebird"
            />
            <MainFeature
              img={require('./src/assets/icons/go-send.png')}
              name="go-send"
            />
            <MainFeature
              img={require('./src/assets/icons/go-deal.png')}
              name="go-deals"
            />
            <MainFeature
              img={require('./src/assets/icons/go-pulsa.png')}
              name="go-pulsa"
            />
            <MainFeature
              img={require('./src/assets/icons/go-food.png')}
              name="go-food"
            />
            <MainFeature
              img={require('./src/assets/icons/go-more.png')}
              name="more"
            />
          </View>
          <View style={styles.lines} />
          {/*NEWS SECTION */}
          <View style={styles.wrapperFirstNewsSec}>
            <View style={styles.wrapperImageNews}>
              <Image
                source={require('./src/assets/dummy/go-news-football.jpg')}
                style={styles.ImageNewsSec}
              />
              <View style={styles.bgTransparent} />
              <Image
                source={require('./src/assets/logo/logo-gojek-transparent.png')}
                style={styles.logoGojek}
              />
            </View>
            <View style={styles.wrapperTextNews}>
              <Text style={styles.textNewsSec}>go-news</Text>
              <Text style={styles.textDescNews}>
                Gelandang Timnas Indonesia di era Shin Tae Yong
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
                source={require('./src/assets/logo/logos-gojek.png')}
                style={styles.logoGojekInternalSec}
              />
            </View>
            <Text style={styles.textInternSec}>Connect with Facebook</Text>
            <View style={styles.wrapperFacebookIntern}>
              <View>
                <Image
                  style={styles.imageFacebookIntern}
                  source={require('./src/assets/dummy/facebook-connect.png')}
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
                source={require('./src/assets/dummy/banner-food.jpg')}
                style={styles.ImageNewsSec}
              />
              <View style={styles.bgTransparent} />
              <Image
                source={require('./src/assets/logo/logo-gofood.png')}
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
          {/*NEARBY GO-FOOD */}
          <View>
            <View style={styles.wrapperLogoFood}>
              <Image
                source={require('./src/assets/logo/logo-gofood.png')}
                style={styles.logoFood}
              />
            </View>
            <View style={styles.wrapperTextFood}>
              <Text style={styles.textNearby}>Nearby Restaurant</Text>
              <Text style={styles.textDescAll}>See All</Text>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.wrapperFoodSection}>
              <View>
                <View style={styles.wrapperImageFood}>
                  <Image
                    source={require('./src/assets/dummy/nasi-kebuli.jpg')}
                    style={styles.imageFood}
                  />
                </View>
                <Text style={styles.textFoodSection}>Nasi Kebuli Priuk</Text>
              </View>
              <View>
                <View style={styles.wrapperImageFood}>
                  <Image
                    source={require('./src/assets/dummy/mie-ayam-bakso.jpg')}
                    style={styles.imageFood}
                  />
                </View>
                <Text style={styles.textFoodSection}>Mie Ayam Bakso</Text>
              </View>
              <View>
                <View style={styles.wrapperImageFood}>
                  <Image
                    source={require('./src/assets/dummy/soto-betawi.jpg')}
                    style={styles.imageFood}
                  />
                </View>
                <Text style={styles.textFoodSection}>Soto Betawi</Text>
              </View>
              <View>
                <View style={styles.wrapperImageFood}>
                  <Image
                    source={require('./src/assets/dummy/martabak-telor.jpg')}
                    style={styles.imageFood}
                  />
                </View>
                <Text style={styles.textFoodSection}>Martabak Telor</Text>
              </View>
              <View>
                <View style={styles.wrapperImageFood}>
                  <Image
                    source={require('./src/assets/dummy/rujak-cingur.jpg')}
                    style={styles.imageFood}
                  />
                </View>
                <Text style={styles.textFoodSection}>Rujak Cingur</Text>
              </View>
              <View>
                <View style={styles.wrapperImageFood}>
                  <Image
                    source={require('./src/assets/dummy/pecel-lele.jpg')}
                    style={styles.imageFood}
                  />
                </View>
                <Text style={styles.textFoodSection}>Pecel Lele</Text>
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={styles.lineBottomFood} />
      </ScrollView>
      <View style={styles.bottomNav}>
        <View style={styles.wrapperIcons}>
          <Image
            source={require('./src/assets/icons/home-active.png')}
            style={styles.icons}
          />
          <Text style={styles.font}>Home</Text>
        </View>
        <View style={styles.wrapperIcons}>
          <Image
            source={require('./src/assets/icons/order.png')}
            style={styles.icons}
          />
          <Text style={styles.font}>Orders</Text>
        </View>
        <View style={styles.wrapperIcons}>
          <Image
            source={require('./src/assets/icons/help.png')}
            style={styles.icons}
          />
          <Text style={styles.font}>Help</Text>
        </View>
        <View style={styles.wrapperIcons}>
          <Image
            source={require('./src/assets/icons/inbox.png')}
            style={styles.icons}
          />
          <Text style={styles.font}>Inbox</Text>
        </View>
        <View style={styles.wrapperIcons}>
          <Image
            source={require('./src/assets/icons/account.png')}
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
  lines: {
    height: 17,
    backgroundColor: '#F2F2F4',
    marginTop: 20,
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
  // STYLE NEARBY GO-FOOD
  wrapperLogoFood: {
    height: 30,
    width: 75,
    marginLeft: 16,
  },
  logoFood: {
    height: undefined,
    width: undefined,
    resizeMode: 'contain',
    flex: 1,
    backgroundColor: 'white',
  },
  wrapperTextFood: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  textNearby: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1C1C1C',
  },
  textDescAll: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#61A756',
  },
  wrapperFoodSection: {
    flexDirection: 'row',
    paddingLeft: 16,
  },
  wrapperImageFood: {
    height: 150,
    width: 150,
  },
  imageFood: {
    height: undefined,
    width: undefined,
    resizeMode: 'cover',
    flex: 1,
    borderRadius: 10,
    marginRight: 16,
  },
  textFoodSection: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C1C1C',
    marginTop: 12,
    textAlign: 'center',
  },
  lineBottomFood: {
    borderBottomWidth: 1,
    borderBottomColor: '#E8E9ED',
    marginHorizontal: 16,
    marginTop: 18,
    marginBottom: 20,
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
  wrapperIcons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
