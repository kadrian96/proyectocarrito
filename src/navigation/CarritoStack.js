import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/ScreenNames";
import CarritoScreen from "../screens/Carrito/CarrritoScreen";


const Stack=createNativeStackNavigator();
const CarritoStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name={screen.carrito.carrito}
                component={CarritoScreen}
                options={{title:"Carrito"}}
                />
                
        </Stack.Navigator>
    )
}
export default CarritoStack;