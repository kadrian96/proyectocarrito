import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/ScreenNames";
import ProductosScreen from "../screens/Productos/ProductosScreen";
import DetailProductScreen from "../screens/Productos/DetailProductScreen";


const Stack=createNativeStackNavigator();
const ProductosStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name={screen.productos.productos}
                component={ProductosScreen}
                options={{title:"Productos"}}
                />
                <Stack.Screen 
                name={screen.productos.detailProduct}
                component={DetailProductScreen}
                options={{title:"Detalle de productos"}}
                />
                
        </Stack.Navigator>
    )
}
export default ProductosStack;