import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    footer: {
      flex:1,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      backgroundColor: "rgba(0, 0, 0, 0.33)",
      display:'flex',
      justifyContent:'center'
    },
    txt: {
      width:'90%',
      marginLeft:"5%",
      opacity: 0.33,
      color: "white",
      fontSize: 13,
      fontFamily: "Rubik",
      fontWeight: "400",
      lineHeight: 16,
      wordWrap: "break-word",
    },
  });