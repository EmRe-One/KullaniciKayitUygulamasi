
import DashboardScreen from "../pages/registered/DashboardScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const RegisteredNavigation = () => (
  <Drawer.Navigator initialRouteName="Dashboard">
    <Drawer.Screen name="Dashboard" component={DashboardScreen}/>
  </Drawer.Navigator>
);

export default RegisteredNavigation;
