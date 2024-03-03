import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignUpScreen from './src/screens/SignUpScreen';
import SubmitTextScreen from './src/screens/SubmitTextScreen';
import TextListScreen from './src/screens/TextListScreen';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import LoginScreen from './src/screens/LoginScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Login" component={LoginScreen} />
          <Tab.Screen name="SignUp" component={SignUpScreen} />
          <Tab.Screen name="SubmitText" component={SubmitTextScreen} />
          <Tab.Screen name="TextList" component={TextListScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
