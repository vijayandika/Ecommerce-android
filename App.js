//import packga.json
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Import pages 
import HomeScreen from './pages/HomeScreen';
import ChatScreen from './pages/ChatScreen';
import LoginScreen from './pages/LoginScreen';
import FeedScreen from './pages/FeedScreen';
import RegisterScreen from './pages/RegisterScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';

//Masukkan Fungsi
const HomeUtama = createStackNavigator({
  Home: { screen: HomeScreen }
}, {
  headerMode : 'none'
}
);

//Tombol Back(FadeScreen.js)
const FeedStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Feed: { screen: FeedScreen },
    Details: { screen: LoginScreen },
    Chat: { screen: ChatScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#e67e22',
      },
      headerTintColor: '#FFFFFF',
      title: 'Feed',
      //Header title
    },
  }
);

const RegisterStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Register: { screen: RegisterScreen},
    Details: { screen: LoginScreen },
    Chat: { screen: ChatScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#e67e22',
      },
      headerTintColor: '#FFFFFF',
      title: 'Feed',
      //Header title
    },
  }
);


const ChatStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Feed: { screen: FeedScreen },
    Details: { screen: LoginScreen },
    Chat: { screen: ChatScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#e67e22',
      },
      headerTintColor: '#FFFFFF',
      title: 'Chat',
      //Header title
    },
  }
);

//Kegunaan Fungsi
const App = createBottomTabNavigator({
  Home: { screen: HomeUtama },
  Feed: { screen: FeedStack },
  Notification: { screen: ChatStack },
  Login: { screen: LoginScreen },
   Register: {screen : RegisterStack}  
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Home') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      } else if (routeName === 'Feed') {
        iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
      }
      else if (routeName === 'Notification') {
        iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
      }
      else if (routeName === 'Login') {
        iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
      }
      else if (routeName === 'Register') {
        iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
      }
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),

}
  
);



//Output Fungsi
export default createAppContainer(App)


