/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import routes from './routes';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
          initialRouteName="Start"
        //   gestureEnabled
        // cardOverlayEnabled
        // cardStyleInterpolator={CardStyleInterpolators.forVerticalIOS},
      >
        {routes.map(route => (
          <Stack.Screen
            key={route.name}
            name={route.name}
            component={route.screen}
            options={{
              headerShown: false,
              ...(route.configs || {}),
            }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
