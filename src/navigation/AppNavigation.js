import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import {screen} from "../utils/ScreenNames"
import AccountStack from "./AccountStack";
import ProductosStack from "./ProductosStack";
import CarritoStack from "./CarritoStack";
const Tab = createBottomTabNavigator();

export const AppNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#2980B9",
        tabBarInactiveTintColor: "#646464",
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
      })}
    >
      <Tab.Screen 
        name={screen.account.tab}
        component={AccountStack} 
        options={{ title: "Cuenta" }}
        />
        <Tab.Screen 
        name={screen.productos.tab}
        component={ProductosStack} 
        options={{ title: "Productos" }}
        />
        {/* <Tab.Screen 
        name={screen.carrito.tab}
        component={CarritoStack} 
        options={{ title: "Carrito" }}
        /> */}

    </Tab.Navigator>
  );
};
//función - permitir cabiar los íconos
const screenOptions = (route, color, size) => {
    let iconName;
  
    if (route.name == screen.account.tab) {
      iconName = "account";
    }
    if (route.name == screen.productos.tab) {
        iconName = "store";
      }
      // if (route.name == screen.carrito.tab) {
      //   iconName = "cart";
      // }
  
    return (
      <Icon type="material-community" name={iconName} color={color} size={size} />
    );
  };