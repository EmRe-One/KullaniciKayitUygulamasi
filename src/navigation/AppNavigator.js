import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardScreen from "../pages/DashboardScreen";
import RegisterScreen from '../pages/RegisterScreen';
import CurrentRegistrationScreen from '../pages/CurrentRegistrationScreen';
import DemoPage from "../pages/DemoPage";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Dashboard">
    <Stack.Screen name="Dashboard" component={DashboardScreen}/>
    <Stack.Screen name="Demo" component={DemoPage}/>
    <Stack.Screen name="Register" component={RegisterScreen}/>
    <Stack.Screen name="CurrentRegistration" component={CurrentRegistrationScreen}/>
  </Stack.Navigator>
);

export default AppNavigator;
