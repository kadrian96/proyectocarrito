
import { View,Text,ImageBackground,Image } from "react-native";
import { styles } from "./UserLoggerScreen.styles";
const UserLoggerScreen=()=>{
    return(
        <View style={styles.container}>
            <ImageBackground  source= {require("../../../assets/img/fondologged.jpg")} resizeMode="cover" style= {styles.imagenf}>
            <Text style={styles.title} >Bienvenido a tu cuenta</Text>
            <Image
            source={{ uri: "https://img.freepik.com/foto-gratis/empleado-tienda-ropa-trabajando_23-2148915585.jpg?w=900&t=st=1686898268~exp=1686898868~hmac=2eb58243248c5bb647cf16deb900bb2a19e56e7127023301a58fd7708c4d048d" }} 
            style={styles.image}
      />
            <Text style={styles.parrafo}>Sigue disfrutando de tus beneficios como suscriptor</Text>
            </ImageBackground>
        </View>
    )
};
export default UserLoggerScreen