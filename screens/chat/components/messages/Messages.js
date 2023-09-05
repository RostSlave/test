import { View, StyleSheet, TextInput, Text, Image } from "react-native";
import { styles } from "./style";
import React, { useState, useRef } from "react";

function Messages() {
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const formattedTime = `${hours}:${minutes}:${seconds}`;

    return formattedTime;
  };

  const mes = [
    {
      username: "rost",
      level: Math.floor(Math.random() * 10) + 1,
      mess: "aasasasasasasasasasasasasas",
    },
    {
      username: "sasha",
      level: Math.floor(Math.random() * 10) + 1,
      mess: "aasdsdssdsasasasasasas",
    },
    {
      username: "ilya",
      level: Math.floor(Math.random() * 10) + 1,
      mess: "aasasasfffffffffffasas",
    },
    {
      username: "tema",
      level: Math.floor(Math.random() * 10) + 1,
      mess: "aasasasashhhhhhhhhhhhh",
    },
    {
      username: "misha",
      level: Math.floor(Math.random() * 10) + 1,
      mess: "aasasasasaasdsadashf",
    },
  ];
  return (
    <View>
      {mes.map((item, index) => (
        <View style={styles.fullMess}>
          <View style={styles.messageStyle} key={index}>
            <View style={styles.user}>
              <Image
                source={require("../../../../assets/btc2.png")}
                style={{ width: 20, height: 20 }}
              />
              <Text style={styles.txt}>{item.username}</Text>
              {item.level === 4 && (
                <Image
                  source={require("../../../../assets/admin.png")}
                  style={{ width: 20, height: 20 }}
                />
              )}
              <Text style={styles.number}>{item.level}</Text>
            </View>
            <Text>{item.mess}</Text>
          </View>
          <View style={styles.time}>{getCurrentTime()}</View>
        </View>
      ))}
    </View>
  );
}

export default Messages;
