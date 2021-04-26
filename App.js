import React from "react";
// import {} from "react-native";

//importing screens
import Search from "./Screens/SearchScreen";
import Home from "./Screens/Home";

//import navigation
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class App extends React.Component {
  render() {
    return (
        <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: {
     screen: Home ,
     navigationOptions: {
      tabBarLabel: 'Home', 
      tabBarIcon: ({ tintColor }) => (
          <Icon name="home" color={tintColor} size={25} />
      )
  }
    },
  Search: { 
    screen: Search,
    navigationOptions: {
      tabBarLabel: 'Search', 
      tabBarIcon: ({ tintColor }) => (
          <Icon name="search" color={tintColor} size={25} />
      )
  }
   },
  },{
    tabBarOptions: {
        activeTintColor: '#7f5af0', 
        inactiveTintColor: '#72757e',
    }
});

const AppContainer = createAppContainer(TabNavigator);


