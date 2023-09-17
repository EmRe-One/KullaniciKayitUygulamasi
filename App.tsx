import React, {JSX} from 'react';
import 'react-native-gesture-handler';
import AppNavigator from "./src/navigation/AppNavigator";
import {NavigationContainer} from "@react-navigation/native";
import {enableScreens} from "react-native-screens";

enableScreens();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  );
}

export default App;
