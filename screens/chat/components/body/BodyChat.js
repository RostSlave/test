import { ScrollView, View, StyleSheet, Text } from "react-native";
import { styles } from "./style";
import React, { useState } from "react";
import Messages from "../messages/Messages";
import RNPickerSelect from "react-native-picker-select";


function BodyChat() {
  return (
    <View style={[styles.scrolling, { width: 360, height: 320 }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Messages />
        <Messages />
      </ScrollView>
    </View>
  );
}

export default BodyChat;
