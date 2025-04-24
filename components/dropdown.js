import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
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
        activeOpacity={0.6}
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
        <View style={styles.dropDownContainer}>
          <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.value.toString()}
            style={styles.dropdownScroll}
            contentContainerStyle={styles.dropdownContent}
            nestedScrollEnabled={true}
            keyboardShouldPersistTaps="handled"
            removeClippedSubviews={false} // Mejora rendimiento en Android
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
  dropdownContainer: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    zIndex: 9999,
  },
  button: {
    backgroundColor: "#444",
    padding: 12,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "96%",
    // height: 50,
  },
  placeholder: {
    color: "#fff",
    fontSize: 16,
  },
  dropDownSc: {
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
    overflow: "hidden",
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

  dropdownContent: {
    paddingVertical: 8,
  },
});

export default CustomDropdown;
