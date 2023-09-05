import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { styles } from "./style";
import Top_bar from "./TopBar";
import React, { useState } from "react";
import {Picker} from '@react-native-picker/picker';

function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState("Ru"); // Выбранный язык
  const languageOptions = [
    { label: "En", value: "En" },
    { label: "Zho", value: "Zho" },
    { label: "Ru", value: "Ru" },
    // Добавьте другие языки по вашему выбору
  ];

  const handleLanguageChange = (value) => {
    setSelectedLanguage(value);
    // Здесь можно добавить логику для изменения языка при выборе нового языка
  };
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const handlePickerToggle = () => {
    setIsPickerOpen(!isPickerOpen);
  };

  return (
    <View style={styles.header}>
      <View style={styles.headerTools}>
        <Top_bar />
        <View style={styles.butn}>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(item) => handleLanguageChange(item.value)}
            style={styles.picker}
          >
            {languageOptions.map((item, index) => (
              <Picker.Item
                key={index}
                itemStyle={{backgroundColor:'black'}}
                label={item.label}
                value={item.value}
              />
            ))}
          </Picker>
          <FontAwesomeIcon name="window-minimize" style={styles.min} />
          <FontAwesomeIcon name="window-maximize" style={styles.enlarge} />
        </View>
      </View>
    </View>
  );
}
export default Header;
