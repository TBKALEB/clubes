import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

const CustomDropdown = ({
  open,
  value,
  items,
  setOpen,
  setValue,
  setItems,
  placeholder,
  placeholderStyle,
  dropDownContainerStyle,
  containerStyle,
  buttonStyle,
  itemStyle,
  itemTextStyle,
  modalStyle,
  flatListStyle,
  flatListContentStyle,
  arrowIconStyle,
}) => {
  const [modalVisible, setModalVisible] = useState(open || false);
  const [selectedItem, setSelectedItem] = useState(value || null);

  useEffect(() => {
    setModalVisible(open); // Actualiza la visibilidad del modal cuando 'open' cambia
  }, [open]);

  useEffect(() => {
    setSelectedItem(value); // Actualiza el valor seleccionado cuando 'value' cambia
  }, [value]);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    setOpen(!modalVisible); // Actualiza el estado de apertura en el componente padre
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
    setValue(item); // Actualiza el valor seleccionado en el componente padre
    setModalVisible(false);
    setOpen(false); // Cierra el dropdown al seleccionar un item
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={itemStyle} onPress={() => handleSelect(item)}>
      <Text style={[itemTextStyle]}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[containerStyle]}>
      <TouchableOpacity style={[buttonStyle]} onPress={toggleModal}>
        <Text style={[placeholderStyle]}>
          {selectedItem ? selectedItem.label : placeholder}
        </Text>
        <Icon
          name="chevron-down"
          size={20}
          color="#fff"
          style={[arrowIconStyle]}
        />
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={toggleModal}
      >
        <TouchableOpacity style={modalStyle} onPress={toggleModal}>
          <View style={[dropDownContainerStyle]}>
            <FlatList
              data={items}
              renderItem={renderItem}
              keyExtractor={(item) => item.value}
              style={flatListStyle}
              contentContainerStyle={flatListContentStyle}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   margin: 10,
  //   height: "100%",
  //   width: "100%",
  //   justifyContent: "center",
  //   // alignItems: "center",
  // },
  // dropdownButton: {
  //   backgroundColor: "#fff",
  //   borderRadius: 5,
  //   borderColor: "transparent",
  // },
  // dropdownText: {
  //   fontSize: 16,
  //   color: "#333",
  // },
  // modalOverlay: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "rgba(0, 0, 0, 0.5)",
  // },
  // modalContent: {
  //   width: "80%",
  //   backgroundColor: "#fff",
  //   borderRadius: 10,
  //   padding: 20,
  //   elevation: 5,
  // },
  // flatList: {
  //   maxHeight: 200, // Ajusta la altura máxima de la lista en el modal
  // },
  // flatListContent: {
  //   paddingBottom: 10, // Añade espacio extra al final de la lista
  // },
  // item: {
  //   paddingVertical: 15,
  //   borderBottomWidth: 1,
  //   borderBottomColor: "#ccc",
  // },
  // itemText: {
  //   fontSize: 16,
  //   color: "#333",
  // },
});

export default CustomDropdown;
