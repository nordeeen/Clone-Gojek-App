import React, {Component} from 'react';
import {View} from 'react-native';
import MainFeature from '../../../components/molecules/MainFeature';

class HomeMainFeature extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 18}}>
        <MainFeature
          img={require('../../../assets/icons/go-ride.png')}
          name="go-ride"
        />
        <MainFeature
          img={require('../../../assets/icons/go-car.png')}
          name="go-car"
        />
        <MainFeature
          img={require('../../../assets/icons/go-bluebird.png')}
          name="go-bluebird"
        />
        <MainFeature
          img={require('../../../assets/icons/go-send.png')}
          name="go-send"
        />
        <MainFeature
          img={require('../../../assets/icons/go-deal.png')}
          name="go-deals"
        />
        <MainFeature
          img={require('../../../assets/icons/go-pulsa.png')}
          name="go-pulsa"
        />
        <MainFeature
          img={require('../../../assets/icons/go-food.png')}
          name="go-food"
        />
        <MainFeature
          img={require('../../../assets/icons/go-more.png')}
          name="more"
        />
      </View>
    );
  }
}

export default HomeMainFeature;
