import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import GoBanner from './src/components/molecules/GoBanner';
import GoInfo from './src/components/molecules/GoInfo';
import GopayFeature from './src/components/molecules/GopayFeature';
import MainFeature from './src/components/molecules/MainFeature';
import NavBarIcon from './src/components/molecules/NavBarIcon';
import NewsFeature from './src/components/molecules/NewsFeature';
import SearchFeature from './src/components/molecules/SearchFeature';
import HomeMainFeature from './src/container/organisms/HomeMainFeature';
import NavBar from './src/container/organisms/NavBar';
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
          <HomeMainFeature/>
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
      <NavBar />
    </View>
  );
};

export default App;
