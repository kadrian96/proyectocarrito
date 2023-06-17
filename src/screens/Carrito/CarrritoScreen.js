import React from "react";
import { View, Text } from "react-native";
import { useState,useEffect} from "react";
import { ListItem,Button } from "@rneui/themed";

const CarritoScreen = ({route}) => {
  
  const  products  = route.params;
  console.log(products);
  const [cartItems, setCartItems] = useState(products);

  const clearCart = () => {
    setCartItems([]);
  };
    
    
    
  return (

    
    <View >
     
    
      <Text >Mira tus compras</Text>
      {/* {products.map((producto,i) => (
        
        <ListItem 
            key={i}
           
        >
          <ListItem.Content >
            <ListItem.Title> item: {producto.name}</ListItem.Title>
            <ListItem.Subtitle>precio: {producto.price} </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        
      ))} */}
      <Button title="Vaciar carrito" onPress={clearCart} />

      
      
    </View>
  );
};
export default CarritoScreen;