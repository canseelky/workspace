import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Home from "../screens/Home";
import LanguageSetting from "../screens/LanguageSetting";
import Settings from "../screens/Settings";

const HomeStack = createStackNavigator({
  home: Home,
});
const SettingStack = createStackNavigator({
  setting: Settings,
  LanguageSetting,
});
const bottomNav = createBottomTabNavigator(
  {
    home: HomeStack,
    setting: {
      screen: SettingStack,
      navigationOptions: {
        title: "Settings",
      },
    },
  },
  {
    defaultNavigationOptions: () => ({
      tabBarOptions: {
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      },
    }),
  }
);

export default createAppContainer(bottomNav);
