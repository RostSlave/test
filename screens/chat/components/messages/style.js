import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  messageStyle: {
    display: "flex",
    maxWidth: "65%",
    minWidth: "30%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    padding: "2.5%",
    margin: "1.5%",
  },
  user: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: "2.5%",
  },
  txt: {
    color: "#999999",
    fontSize: 16,
    fontFamily: "Rubik",
  },
  number: {
    color: "#23B838",
  },
  fullMess: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    opacity: 0.4,
    color: "white",
    fontSize: 12,
    fontFamily: "Rubik",
    fontWeight: "400",
    lineHeight: 12,
    wordWrap: "break-word",
  },
});
