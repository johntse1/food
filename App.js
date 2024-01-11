import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';

//implementation of stack navigator, keys are named by yourself, components are not.
const navigator = createStackNavigator({
  Search: SearchScreen
},{
  initialRouteName: 'Search',
  //Customizes the header at the top of every screen
  defaultNavigationOptions:{
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);
