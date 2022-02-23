import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Home, NewsDetail} from '../../container/pages';

const Router = createStackNavigator(
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
  },
);

export default createAppContainer(Router);
