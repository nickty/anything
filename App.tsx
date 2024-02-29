import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignUpScreen from './src/screens/SignUpScreen';
import SubmitTextScreen from './src/screens/SubmitTextScreen';
import TextListScreen from './src/screens/TextListScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* <Tab.Screen name="SignUp" component={SignUpScreen} /> */}
        <Tab.Screen name="SubmitText" component={SubmitTextScreen} />
        <Tab.Screen name="TextList" component={TextListScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
