import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { styles } from "./style";
import React, { useState, useRef } from "react";
import { Icon } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";

function TopBar() {
  const [selectedItem, setSelectedItem] = useState("общий");
  const menuItems = ["общий", "клан", "друзья", "новости"];

  const scrollToLeft = () => {
    if (ScrollView.current) {
      ScrollView.current.scrollTo({ x: 0, animated: true });
    }
  };

  const scrollToRight = () => {
    if (ScrollView.current) {
      ScrollView.current.scrollToEnd({ animated: true });
    }
  };

  return (
    <View style={styles.scrolling}>
      <TouchableOpacity onPress={scrollToLeft}>
        <Icon name="chevron-left" type="material" />
      </TouchableOpacity>
      <ScrollView
        horizontal
        ref={ScrollView}
        contentContainerStyle={styles.bar}
        showsHorizontalScrollIndicator={false}
      >
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => setSelectedItem(item)}>
            <Text style={selectedItem === item ? [styles.txt, {color:'white'}] : styles.txt} >{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity onPress={scrollToRight} >
        <Icon name="chevron-right" type="material" />
      </TouchableOpacity>
    </View>
  );
}

export default TopBar;
