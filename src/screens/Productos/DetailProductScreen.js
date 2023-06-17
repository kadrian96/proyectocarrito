import React from "react";
import { View,Image } from "react-native";
import { Text, Button, } from "@rneui/themed";
import { styles } from "./DetailProductScreen.styles";
const DetailProductScreen =({route}) =>{
    
    const  product=route.params;

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{product.name}</Text>
            
            <Image
                 source={{ uri: product.image }}
                style={styles.image}
            />
            <Text style={styles.productkey}>
                Precio:
                <Text style={styles.productosub}> {product.price}$</Text> 
            </Text>
            <Text style={styles.productkey}>
                Marca:
                <Text style={styles.productosub}> {product.marca}</Text> 
            </Text>
            <Text style={styles.productkey}>
                ID:
                <Text style={styles.productosub}> {product.id}</Text> 
            </Text>
            <Text style={styles.productkey}>
                Categoria:
                <Text style={styles.productosub}> {product.categoria}</Text> 
            </Text>
            <Text style={styles.productkeydes}>
                Descripcion:
                <Text style={styles.productdes}> {product.descripcion}</Text> 
            </Text>
          
        </View>
    )
}
export default DetailProductScreen;