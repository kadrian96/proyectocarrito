//rnf+TAB
import React from "react";
import { ScrollView,ImageBackground, View } from "react-native";
import { Text, Button, Image } from "@rneui/themed";
import { styles } from "./UserGuestScreen.styles";
import {screen} from "../../../utils/ScreenNames";
import { useNavigation } from "@react-navigation/native";

const UserGuestScreen = () => {
  const navigation= useNavigation();  
  const goToLogin = () => {
    navigation.navigate(screen.account.login);
    
  };

  return (
    <ScrollView
      contentContainerStyle={{ flex: 1 }}
    >
      <ImageBackground source= {require("../../../../assets/img/fondo.jpg")} resizeMode="cover" style= {styles.imagenf}>
      <View   style={styles.viewbody}>
      <Image
        source={require("../../../../assets/img/fondocelular.jpg")}
        style={styles.image}
      />

      <Text style={styles.title}>Ingresa a tu Cuenta</Text>

      <Text style={styles.description}>
        Ingresa a tu cuenta para que puedas pedir y comprar todos los 
        productos que siempre deseaste, con los mejores precios y las mejores marcas
      </Text>

      <Button 
      title="Ir a mi cuenta" 
      onPress={goToLogin} 
      buttonStyle={styles.btnStyle}
      />
      </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default UserGuestScreen;
