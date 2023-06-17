import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  viewbody:{
      marginHorizontal: 30,
  },
  imagenf:{
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    
},  

  image: {
    resizeMode: "contain",

    height: 300, //alto

    width: "100%", //ancho

    //marginBottom: 20,
  },

  title: {
    fontWeight: "bold",

    fontSize: 19,

    textAlign: "center",

    marginBottom: 10,
  },

  description: {
    textAlign: "center",

    marginBottom: 20,


  },
  btnStyle:{
    backgroundColor: "#2980B9",
    borderRadius: 5,
  }
});
