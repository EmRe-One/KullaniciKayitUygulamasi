import {createStackNavigator} from "@react-navigation/stack";
import RegisterScreen from "../pages/public/RegisterScreen";
import LandingpageScreen from "../pages/public/LandingpageScreen";
import LoginScreen from "../pages/public/LoginScreen";

const Stack = createStackNavigator();

const PublicNavigation = () => (
  <Stack.Navigator initialRouteName="Landing" >
    <Stack.Screen name="Landing" component={LandingpageScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default PublicNavigation;
