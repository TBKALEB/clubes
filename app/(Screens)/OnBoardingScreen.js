import { Ionicons } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import { Platform } from "react-native";
import { View, TextInput, Button, Text, StyleSheet, Alert } from "react-native";
import { useState } from "react";

const OnBoardingScreen = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Primaria", value: "primaria" },
    { label: "Secundaria", value: "secundaria" },
    { label: "Bachillerato", value: "bachillerato" },
    { label: "Universidad", value: "universidad" },
  ]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la Aplicación</Text>
      <View style={styles.formBox}>
        <View
          style={[
            styles.inputWithIcon,
            { zIndex: 10, ...Platform.select({ android: { padding: 14 } }) },
          ]}
        >
          <Ionicons
            name="school-outline"
            style={styles.icon}
            size={24}
            color="gray"
          />
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Nivel de Estudio"
            placeholderStyle={{ color: "#ffffff" }}
            style={{
              backgroundColor: "transparent",
              width: "90%",
              borderColor: "transparent",
              flex: 1,
            }}
            dropDownContainerStyle={{
              backgroundColor: "#000",
              borderColor: "#ccc",
              borderRadius: 8,
              width: "96%",
            }}
            textStyle={{ color: "#ffffff" }}
            arrowIconStyle={{
              tintColor: "#ffffff",
            }}
          />
        </View>
        <View style={[styles.inputWithIcon, { zIndex: 9 }]}>
          <Ionicons
            name="book-outline"
            style={styles.icon}
            size={24}
            color="gray"
          />
          <TextInput
            placeholder="Materia"
            style={styles.input}
            placeholderTextColor={"#ffffff"}
          />
        </View>
        <View style={[styles.inputWithIcon, { zIndex: 8 }]}>
          <Ionicons
            name="extension-puzzle-outline"
            style={styles.icon}
            size={24}
            color="gray"
          />
          <TextInput
            placeholder="Rama"
            style={styles.input}
            placeholderTextColor={"#ffffff"}
          />
        </View>
        <View style={[styles.inputWithIcon, { zIndex: 7 }]}>
          <Ionicons
            name="search-outline"
            style={styles.icon}
            size={24}
            color="gray"
          />
          <TextInput
            placeholder="Enfoque"
            style={styles.input}
            placeholderTextColor={"#ffffff"}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
    color: "#fff",
  },
  formBox: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 15,
    padding: 20,
    width: "90%",
    maxWidth: 400,
    alignSelf: "center",
  },
  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "transparent",
  },
  input: {
    flex: 1,
    outlineStyle: "none",
    padding: 14,
    color: "#ffffff",
  },
});

export default OnBoardingScreen;
