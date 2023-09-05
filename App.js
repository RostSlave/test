import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import Chat from "./screens/Chat";

export default function App() {

  return (
    <ImageBackground
      source={require("./pictures/qwe.png")}
      style={styles.image}
      resizeMode="stretch"
    >
      <View style={styles.content}>
        <Chat />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  content: {
    flex: 1,
    display: "flex",
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginBottom: '3%',
    marginLeft: '3%',
  },
});
