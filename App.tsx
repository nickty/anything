import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignUpScreen from './src/screens/SignUpScreen';
import SubmitTextScreen from './src/screens/SubmitTextScreen';
import TextListScreen from './src/screens/TextListScreen';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import LoginScreen from './src/screens/LoginScreen';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainApp() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="SubmitText" component={SubmitTextScreen} />
      <Tab.Screen name="TextList" component={TextListScreen} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{headerShown: false}}
          />
          {/* Once the user is authenticated, MainApp (Tab Navigator) becomes accessible */}
          <Stack.Screen
            name="MainApp"
            component={MainApp}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
