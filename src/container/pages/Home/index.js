import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import GoBanner from '../../../components/molecules/GoBanner';
import GoInfo from '../../../components/molecules/GoInfo';
import NewsFeature from '../../../components/molecules/NewsFeature';
import SearchFeature from '../../../components/molecules/SearchFeature';
import HomeGopayFeature from '../../../container/organisms/HomeGopayFeature';
import HomeMainFeature from '../../../container/organisms/HomeMainFeature';
import NavBar from '../../../container/organisms/NavBar';
import ScrollableProducts from '../../../container/organisms/ScrollableProducts';

class Home extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flex: 1, backgroundColor: 'white'}}>
            <SearchFeature />
            <HomeGopayFeature />
            {/* MAIN FEATURE */}
            <HomeMainFeature />
            <View
              style={{height: 17, backgroundColor: '#F2F2F4', marginTop: 20}}
            />
            {/*NEWS SECTION */}
            <NewsFeature
              onPress={this.props.navigation.navigate('NewsDetail')}
            />
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
  }
}

export default Home;
