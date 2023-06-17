import React, { useState } from "react";
import { View } from "react-native";
import { Input, Icon, Button } from "@rneui/base";
import { styles } from "./RegisterForm.styles";
import { useFormik } from "formik";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initialValues, validationSchema } from "./RegisterForm.data";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils/ScreenNames";
import Toast from "react-native-toast-message"
 
const RegisterForm = () => {
  const navigation = useNavigation();
  //hook - useState
  const [showPassword, setShowPassword] = useState(false);
 
  const showHiddenPassword = () => {
    setShowPassword(!showPassword);
  };
  //hook - formik
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      // console.log("Formulario");
      console.log(formValue);
      try {
        const auth = getAuth();
        await createUserWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password,
        );
        navigation.navigate(screen.account.account);
      } catch (error) {
        console.log(error);
      }
      Toast.show({
        type:"error",
        position:"bottom",
        text1: "Error al registrarse",
        text2: "Intentelo de nuevo",

      })
    },
  });
  return (
    <View style={styles.content}>
      <Input
        placeholder="Correo electrónico"
        containerStyle={styles.input}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={showHiddenPassword}
          />
        }
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Input
        placeholder="Confirmar contraseña"
        containerStyle={styles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={showHiddenPassword}
          />
        }
        onChangeText={(text) => formik.setFieldValue("confirmPassword", text)}
        errorMessage={formik.errors.confirmPassword}
      />
      <Button
        title="Unirse"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnRegister}
        onPress={formik.handleSubmit}
      />
    </View>
  );
};
 
export default RegisterForm;
