import React from 'react';
import 'react-native-gesture-handler';

import {SafeAreaView, StatusBar, useColorScheme,} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppNavigator from "./src/navigation/AppNavigator";
import {NavigationContainer} from "@react-navigation/native";
import DemoPage from "./src/pages/DemoPage";

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  );
}

export default App;
