import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import GoBanner from './src/components/molecules/GoBanner';
import GoInfo from './src/components/molecules/GoInfo';
import GopayFeature from './src/components/molecules/GopayFeature';
import MainFeature from './src/components/molecules/MainFeature';
import NavBarIcon from './src/components/molecules/NavBarIcon';
import NewsFeature from './src/components/molecules/NewsFeature';
import SearchFeature from './src/components/molecules/SearchFeature';
import ScrollableProducts from './src/container/organisms/ScrollableProducts';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          {/* SEARCH BAR */}
          <SearchFeature />
          {/* GOPAY */}
          <View style={{marginHorizontal: 17, marginTop: 8}}>
            <View
              style={{
                backgroundColor: '#2C5FB8',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 14,
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
              }}>
              <Image
                source={require('./src/assets/icons/gopay.png')}
                style={{width: 100, height: 26}}
              />
              <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
                Rp 50.0000
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#2F65BD',
                paddingTop: 18,
                paddingBottom: 14,
                flexDirection: 'row',
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
              }}>
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
          <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 18}}>
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
          <View
            style={{height: 17, backgroundColor: '#F2F2F4', marginTop: 20}}
          />
          {/*NEWS SECTION */}
          <NewsFeature />
          {/*INTERNAL INFORMATION SECTION*/}
          <GoInfo />
          {/*GOFOOD BANNER SECTION*/}
          <GoBanner />
          {/*NEARBY GO-FOOD */}
          <ScrollableProducts />
        </View>
      </ScrollView>
      {/*BOTTOM NAV */}
      <View style={{height: 54, flexDirection: 'row'}}>
        <NavBarIcon
          title="Home"
          img={require('./src/assets/icons/home-active.png')}
          active
        />
        <NavBarIcon
          title="Order"
          img={require('./src/assets/icons/order.png')}
        />
        <NavBarIcon title="Help" img={require('./src/assets/icons/help.png')} />
        <NavBarIcon
          title="Inbox"
          img={require('./src/assets/icons/inbox.png')}
        />
        <NavBarIcon
          title="Account"
          img={require('./src/assets/icons/account.png')}
        />
      </View>
    </View>
  );
};

export default App;
