import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RegisteredNavigation from "./RegisteredNavigation";
import PublicNavigation from "./PublicNavigation";

const MainStack = createStackNavigator();

const AppNavigator = () => {
  // Placeholder ... will be replaced with auth logic
  const isLoggedIn = false;

  return (
    <MainStack.Navigator>
      {isLoggedIn ? (
        <MainStack.Screen name="Registered" component={RegisteredNavigation} options={{ headerShown: false }}/>
      ) : (
        <MainStack.Screen name="Public" component={PublicNavigation}/>
      )}
    </MainStack.Navigator>
  );
};

export default AppNavigator;
