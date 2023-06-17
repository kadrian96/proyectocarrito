import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#D6EAF8",
        alignItems: "center",
        justifyContent: "flex-start",
      },
    title: {
        marginTop: 50,
        fontWeight: "bold",
    
        fontSize: 25,
    
        marginBottom: 50,
        color:"#8E44AD"

        
      },
      image: {
        resizeMode: "contain",
    
        height: 200, //alto
    
        width: "60%", //ancho
    
        marginBottom: 25,
      },
      productkey:{
        
        fontWeight: "bold",
        fontSize: 18,
        color: "red"
      },
      productkeydes:{
        marginTop:20,
        marginHorizontal:30,
        fontWeight: "bold",
        fontSize: 16,
        color: "red"
      },
    productosub:{
       
      fontWeight: "bold",
      fontSize: 18,
      
    },
    productdes:{
        fontSize: 14,
      fontStyle:"italic",
    },
    
})