import React from "react";
import { View, ScrollView,ImageBackground } from "react-native";
import { Text, Image } from "@rneui/base";
import { styles } from "./LoginScreen.styles";
import { screen } from "../../../utils/ScreenNames";
import { useNavigation } from "@react-navigation/native";
import LoginForm from "../../../components/Auth/LoginForm/LoginForm";
 
const LoginScreen = () => {
  const navigation = useNavigation();
  const goToRegister = () => {
    navigation.navigate(screen.account.register);
  };
  return (
    <ScrollView>
      
      <Image
        source={require("../../../../assets/img/logokev.png")}
        style={styles.image}
      />
      <View style={styles.content}>
        <LoginForm />
        <Text style={styles.textRegister}>
          ¿Aún no tienes cuenta?{" "}
          <Text style={styles.btnRegister} onPress={goToRegister}>
            Regístrate
          </Text>
        </Text>
      </View>
      
    </ScrollView>
  );
};
 
export default LoginScreen;