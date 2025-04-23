import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

const CustomDropdown = ({
  value,
  items,
  setValue,
  placeholder = "Selecciona una opción",
}) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(value || null);

  useEffect(() => {
    setSelectedItem(value);
  }, [value]);

  const toggleDropdown = () => setOpen((prev) => !prev);

  const handleSelect = (item) => {
    setSelectedItem(item);
    setValue(item);
    setOpen(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handleSelect(item)}>
      <Text style={styles.itemText}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.button}
        onPress={toggleDropdown}
        activeOpacity={0.8}
      >
        <Text style={styles.placeholder}>
          {selectedItem ? selectedItem.label : placeholder}
        </Text>
        <Icon
          name={open ? "chevron-up" : "chevron-down"}
          size={20}
          color="#fff"
        />
      </TouchableOpacity>

      {open && (
        <View style={styles.dropdown}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={true}
            nestedScrollEnabled={true}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    zIndex: 10,
  },
  button: {
    backgroundColor: "#444",
    padding: 12,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  placeholder: {
    color: "#fff",
    fontSize: 16,
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: "#000",
    borderRadius: 8,
    maxHeight: 200,
    marginTop: 4,
    borderWidth: 1,
    borderColor: "#666",
    elevation: 10, // Android
    zIndex: 9999, // iOS
  },
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  itemText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default CustomDropdown;
