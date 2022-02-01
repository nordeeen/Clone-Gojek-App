import React, {Component} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import ScrollableItems from '../../../components/molecules/ScrollableItems';

class ScrollableProducts extends Component {
  render() {
    return (
      <View>
        <View style={{height: 30, width: 75, marginLeft: 16}}>
          <Image
            source={require('../../../assets/logo/logo-gofood.png')}
            style={{
              height: undefined,
              width: undefined,
              resizeMode: 'contain',
              flex: 1,
              backgroundColor: 'white',
            }}
          />
        </View>
        <View
          style={{
            marginBottom: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
          }}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1C1C1C'}}>
            Nearby Restaurant
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61A756'}}>
            See All
          </Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{flexDirection: 'row', paddingLeft: 16}}>
          <ScrollableItems
            title="Nasi Kebuli Priuk"
            img={require('../../../assets/dummy/nasi-kebuli.jpg')}
          />
          <ScrollableItems
            title="Mie Ayam Bakso"
            img={require('../../../assets/dummy/mie-ayam-bakso.jpg')}
          />
          <ScrollableItems
            title="Soto Betawi"
            img={require('../../../assets/dummy/soto-betawi.jpg')}
          />
          <ScrollableItems
            title="Martabak Telor"
            img={require('../../../assets/dummy/martabak-telor.jpg')}
          />
          <ScrollableItems
            title="Rujak Cingur"
            img={require('../../../assets/dummy/rujak-cingur.jpg')}
          />
          <ScrollableItems
            title="Pecel Lele"
            img={require('../../../assets/dummy/pecel-lele.jpg')}
          />
        </ScrollView>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#E8E9ED',
            marginHorizontal: 16,
            marginTop: 18,
            marginBottom: 20,
          }}
        />
      </View>
    );
  }
}

export default ScrollableProducts;
