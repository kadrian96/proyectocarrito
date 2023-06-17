import { AppNavigation } from "./src/navigation/AppNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { initFirebase } from "./src/utils/firebase";
import Toast from "react-native-toast-message";
import React from "react";
const App=()=> {
  return (
    <>
      <NavigationContainer>
        <AppNavigation/>
      </NavigationContainer>
      <Toast/>
     
    </>
  );
}
export default App;
