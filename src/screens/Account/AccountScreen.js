
//rnf + tab
import React, {useState,useEffect} from "react";
import { View,Text } from "react-native";
import {getAuth, onAuthStateChanged} from "firebase/auth"
import UserGuestScreen from "../Account/UserGuestScreen/UserGuestScreen";
import UserLoggerScreen from "./UserLoggerScreen";

const AccountScreen=()=>{
    //useState
    const[hasLogged, setHasLogged]=useState(false);
    //useEffect
    useEffect(()=>{
        //verifica si el usuario inicio sesion o no
        const auth=getAuth(); //no login -> null
        //verifica si el estado de autenticacion cambio
        onAuthStateChanged(auth,(user)=>{
            //console.log(user);
            setHasLogged(user!=null ? true : false);
        })
    },[])
    return(
        hasLogged==true ? <UserLoggerScreen/>: <UserGuestScreen/>
    )
};
export default AccountScreen