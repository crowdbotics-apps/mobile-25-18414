import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile71421Navigator from '../features/UserProfile71421/navigator';
import Maps71402Navigator from '../features/Maps71402/navigator';
import Settings71380Navigator from '../features/Settings71380/navigator';
import Settings71365Navigator from '../features/Settings71365/navigator';
import NotificationList71364Navigator from '../features/NotificationList71364/navigator';
import Maps71363Navigator from '../features/Maps71363/navigator';
import Settings71348Navigator from '../features/Settings71348/navigator';
import ArticleList71329Navigator from '../features/ArticleList71329/navigator';
import ArticleList71328Navigator from '../features/ArticleList71328/navigator';
import ArticleList71327Navigator from '../features/ArticleList71327/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile71421: { screen: UserProfile71421Navigator },
Maps71402: { screen: Maps71402Navigator },
Settings71380: { screen: Settings71380Navigator },
Settings71365: { screen: Settings71365Navigator },
NotificationList71364: { screen: NotificationList71364Navigator },
Maps71363: { screen: Maps71363Navigator },
Settings71348: { screen: Settings71348Navigator },
ArticleList71329: { screen: ArticleList71329Navigator },
ArticleList71328: { screen: ArticleList71328Navigator },
ArticleList71327: { screen: ArticleList71327Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
