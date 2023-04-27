import { CardStyleInterpolators } from "@react-navigation/stack";
import  {Easing} from 'react-native';

import Start from './src/screens/Start';
import {
  SendCodeToNumber,
  EnterTheCode,
  Registration,
} from './src/screens/Registration';
import { Login } from './src/screens/Login';
import Home from './src/screens/Home';
import ActionMenu from './src/screens/ActionMenu';
import Settings from './src/screens/Settings';
import Profile from './src/screens/Profile';
import Congrats from './src/screens/Congrats';

const config = {
  animation: 'spring',
  config: {
  }
}

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear,
  }
}

const routes = [
  {
    screen: Start,
    name: 'Start',
  },
  {
    screen: SendCodeToNumber,
    name: 'SendCodeToNumber',
  },
  {
    screen: EnterTheCode,
    name: 'EnterTheCode',
  },
  {
    screen: Registration,
    name: 'Registration',
  },
  {
    screen: Login,
    name: 'Login',
  },
 {
    screen: Home,
    name: 'Home',
  },
{
    screen: ActionMenu,
    name: 'ActionMenu',
    configs: {
      headerMode: 'none',
      gestureDirection: 'horizontal',
      transitionSpec: {
        open: config,
        close: closeConfig,
      },
      cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
    },
  },
{
    screen: Settings,
    name: 'Settings',
    config: {
      headerMode: 'none',
      gestureDirection: 'horizontal',
       transitionSpec: {
        open: config,
        close: closeConfig,
      },
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }
  },
  {
    screen: Profile,
    name: 'Profile',
  },
  {
    screen: Congrats,
    name: 'Congrats',
  },
];

export default routes;

