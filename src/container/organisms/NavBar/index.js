import React, {Component} from 'react';
import {View} from 'react-native';
import NavBarIcon from '../../../components/molecules/NavBarIcon';

class NavBar extends Component {
  render() {
    return (
      <View style={{height: 54, flexDirection: 'row'}}>
        <NavBarIcon
          onPress={() => this.props.navigation.navigate('Home')}
          title="Home"
          img={require('../../../assets/icons/home-active.png')}
          active
        />
        <NavBarIcon
          onPress={() => navigation.navigate('Orders')}
          title="Order"
          img={require('../../../assets/icons/order.png')}
        />
        <NavBarIcon
          title="Help"
          img={require('../../../assets/icons/help.png')}
        />
        <NavBarIcon
          title="Inbox"
          img={require('../../../assets/icons/inbox.png')}
        />
        <NavBarIcon
          title="Account"
          img={require('../../../assets/icons/account.png')}
        />
      </View>
    );
  }
}

export default NavBar;
