import React from 'react';
import {View, ScrollView} from 'react-native';
import GoBanner from './src/components/molecules/GoBanner';
import GoInfo from './src/components/molecules/GoInfo';
import NewsFeature from './src/components/molecules/NewsFeature';
import SearchFeature from './src/components/molecules/SearchFeature';
import HomeGopayFeature from './src/container/organisms/HomeGopayFeature';
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
          <HomeGopayFeature />
          {/* MAIN FEATURE */}
          <HomeMainFeature />
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
