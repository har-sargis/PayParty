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

const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Start"
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
    </AuthProvider>
  );
};

export default App;
