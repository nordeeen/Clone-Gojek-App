import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Home, NewsDetail, Orders, OrderDetail} from '../../container/pages';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    NewsDetail: {
      screen: NewsDetail,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);

const OrdersStack = createStackNavigator(
  {
    Orders,
    OrderDetail,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);

const Router = createSwitchNavigator(
  {
    HomeStack,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);

export default createAppContainer(Router);
