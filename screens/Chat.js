import { StyleSheet, View } from "react-native";
import Header from "./chat/components/header/Header";
import Footer from "./chat/components/footer/Footer";
import Body_chat from "./chat/components/body/BodyChat";

export default function Chat() {
  return (
    <View style={styles.chat}>
      <View style={styles.chat_back}>
        <Header></Header>
        <Body_chat></Body_chat>
        <Footer></Footer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chat: {
    width: 360,
    height: 400,
  },
  chat_back: {
    
    width: 360,
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
