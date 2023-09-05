import { View, StyleSheet, TextInput } from "react-native";
import { styles } from "./style";

function Footer() {
  return (
      <View style={styles.footer}>
        <TextInput
          style={styles.txt}
          placeholder="Напишите сообщение..."
        ></TextInput>
      </View>
  );
}

export default Footer;

