/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import { AuthProvider } from '@store/AuthContext';

import routes from './routes';

export type RootStackParamList = {
  Home: undefined;
  Start: undefined;
  Profile: undefined;
  Congrats: undefined;
  Settings: undefined;
  ActionMenu: undefined;
  Login: undefined;
  Registration: undefined;
  EnterToCode: undefined;
  SendCodeToNumber: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator
          initialRouteName="Start"
        >
          {routes.map(route => (
            <Stack.Screen
              key={route.name}
              name={route.name as keyof RootStackParamList}
              component={route.screen}
              options={{
                headerShown: false,
                ...(route.configs || {}),
              }}
            />
          ))}
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
