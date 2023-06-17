import React from "react";
import { View, Text,ScrollView,ImageBackground } from "react-native";
import { ListItem } from "@rneui/themed";
import { styles } from "./ProductosScreen.styles";
import { useNavigation } from "@react-navigation/native";
import {screen} from "../../utils/ScreenNames"
import { Avatar } from "@rneui/base";
const ProductosScreen = () => {
    const navigation= useNavigation(); 
  const products = [
    {
      id:10,  
      name: "Adidas Racer TR21",
      price: 65,
      marca: "Adidas",
      categoria:"Calzado",
      descripcion:"60 % Algodón, 40 % Poliéster, Tenis inspirados en el mundo del running y que proporcionan comodidad a diario.",
      image:"https://assets.adidas.com/images/w_1880,f_auto,q_auto/4cb7f45b21a64881a2ccad1d017daec3_9366/GZ8184_01_standard.jpg",
    },
    {
      id:20,  
      name: "Camista Polo Ralph Lauren",
      price: 45,
      marca: "Ralph Lauren",
      categoria:"Vestimenta",
      descripcion:"Ralph Lauren es sinónimo de Tradición Americana desde 1967 .Esta camisa de polo de Ralph Lauren es auténtica. Fabricada con 100% algodón.",
      image:"https://m.media-amazon.com/images/I/917gjBXvdWL._AC_UL1500_.jpg",
    },
    {
      id:30,  
      name: "Calvin Klein OBSSESION",
      price: 50,
      marca: "Calvin Klein",
      categoria:"Perfumes",
      descripcion:"Calvin Klein OBSESSION Creado para el hombre impulsado por sus pasiones, en el trabajo o el romance.",
      image:"https://m.media-amazon.com/images/I/51T8N4wrmCL._SX522_.jpg",
    },
    {
      id:40,  
      name: "Reloj de Acero Inoxidable Fossil",
      price: 182,
      marca: "Fosiil",
      categoria:"Relojes",
      descripcion:"Reloj casual, FB-01, inspirado en el buceo para hombre. Cada uno de los relojes de Fossil para hombre está construido para durar y encarnar el espíritu audaz y creativo de sus usuarios",
      image:"https://m.media-amazon.com/images/I/61M5EMiKYGL._AC_UL1500_.jpg",
    },
    {
      id:50,  
      name: "Iphone 13 Pro",
      price: 899,
      marca: "Apple",
      categoria:"Tecnologia",
      descripcion:"IOS 16, Tecnologia movil 5G, Capacidad de memoria interna: 256GB, Memoria RAM:8GB, Abierto para cualquier Operadora",
      image:"https://m.media-amazon.com/images/I/61jLiCovxVL._AC_SX679_.jpg",
    },
    {
      id:60,  
      name: "Galanz GLR18FS5S16 Refrigerador",
      price: 1200,
      marca: "Galanz",
      categoria:"Electrodomesticos",
      descripcion:"60 % Algodón, 40Diseño moderno y elegante: refrigerador Galanz con puerta francesa (32.3 x 27.4 x 70.0 pulgadas, ancho x profundidad x alto) % Poliéster, Tenis inspirados en el mundo del running y que proporcionan comodidad a diario.",
      image:"https://m.media-amazon.com/images/I/71ay8wMkf+S._AC_SX679_.jpg",
    },

  ];
  
  return (
    <ScrollView  >
      <ImageBackground 
                source={{ uri: "https://img.freepik.com/foto-gratis/empleado-tienda-ropa-trabajando_23-2148915585.jpg?w=900&t=st=1686898268~exp=1686898868~hmac=2eb58243248c5bb647cf16deb900bb2a19e56e7127023301a58fd7708c4d048d" }} 
                resizeMode="cover"
                >
                  
              <Text style= {styles.title}>Mira nuestros productos</Text>
      </ImageBackground>
      

      {products.map((producto) => (
        
        <ListItem 
            bottomDivider
            //containerStyle={{backgroundColor: "#F2F3F4"}}
            key={producto.id}
            onPress={()=>
                navigation.navigate(screen.productos.detailProduct,producto)
            }
        >
          <Avatar
            
            source={{ uri: producto.image }}
            size={100}
            
          />
          <ListItem.Content>
            <ListItem.Title style={styles.productotitle}> {producto.name}</ListItem.Title>
            <ListItem.Subtitle style={styles.productsubtitle}> categoria: 
                <ListItem.Subtitle > {producto.categoria}</ListItem.Subtitle>
              </ListItem.Subtitle>
            <ListItem.Subtitle style={styles.productsubtitle}> id producto: 
                <ListItem.Subtitle > {producto.id} </ListItem.Subtitle>
              </ListItem.Subtitle>
            <ListItem.Subtitle style={styles.productsubtitle}> precio: 
            <ListItem.Subtitle > {producto.price}$  </ListItem.Subtitle>         
              </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        
      ))}
      <Text style={styles.desp}> ¡Pronto dispondremos de mas productos!</Text>
    </ScrollView>
  );
};
export default ProductosScreen;
