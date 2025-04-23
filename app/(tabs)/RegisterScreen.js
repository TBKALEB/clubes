import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Alert,
  ImageBackground,
  Platform,
} from "react-native";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "@/firebaseConfig";
import { setDoc, doc } from "firebase/firestore";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const RegisterScreen = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const fondo =
    Platform.OS === "web"
      ? require("../../assets/images/bg-web.jpg")
      : require("../../assets/images/bg-movil.jpg");

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await setDoc(doc(db, "usuarios", user.uid), {
        name,
        lastName,
        age,
        email,
      });

      Alert.alert(
        "Account created",
        "You have successfully registered. Please log in."
      );
      router.replace("/(Screens)/OnBoardingScreen");
    } catch (error) {
      Alert.alert("Error", "Failed to create account. Please try again.");
    }
  };

  return (
    <ImageBackground
      source={fondo}
      style={styles.background}
      blurRadius={1}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Create Account</Text>
        <View style={styles.formBox}>
          <View style={styles.inputWithIcon}>
            <Ionicons
              name="person-outline"
              size={24}
              color="gray"
              style={styles.icon}
            />
            <TextInput
              placeholder="Name"
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholderTextColor={"#ffffff"}
            />
          </View>

          <View style={styles.inputWithIcon}>
            <Ionicons
              name="people-outline"
              size={24}
              color="gray"
              style={styles.icon}
            />
            <TextInput
              placeholder="Last Name"
              style={styles.input}
              value={lastName}
              onChangeText={setLastName}
              placeholderTextColor={"#ffffff"}
            />
          </View>

          <View style={styles.inputWithIcon}>
            <Ionicons
              name="calendar-outline"
              size={24}
              color="gray"
              style={styles.icon}
            />
            <TextInput
              placeholder="Age"
              style={styles.input}
              value={age}
              onChangeText={setAge}
              keyboardType="numeric"
              placeholderTextColor={"#ffffff"}
            />
          </View>

          <View style={styles.inputWithIcon}>
            <Ionicons
              name="mail-outline"
              size={24}
              color="gray"
              style={styles.icon}
            />
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              placeholderTextColor={"#ffffff"}
            />
          </View>

          <View style={styles.inputWithIcon}>
            <Ionicons
              name="lock-closed-outline"
              size={24}
              color="gray"
              style={styles.icon}
            />
            <TextInput
              placeholder="Password"
              style={styles.passwordInput}
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              placeholderTextColor={"#ffffff"}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.iconContainer}
            >
              <Ionicons
                name={showPassword ? "eye-off" : "eye"}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.inputWithIcon}>
            <Ionicons
              name="lock-closed-outline"
              size={24}
              color="gray"
              style={styles.icon}
            />
            <TextInput
              placeholder="Confirm Password"
              style={styles.passwordInput}
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholderTextColor={"#ffffff"}
            />
            <TouchableOpacity
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              style={styles.iconContainer}
            >
              <Ionicons
                name={showConfirmPassword ? "eye-off" : "eye"}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>

          <Text style={styles.loginText}>
            You already have an account?
            <Text
              style={styles.link}
              onPress={() => navigation.navigate("LoginScreen")}
            >
              {" "}
              Log in here
            </Text>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  formBox: {
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 15,
    padding: 20,
    width: "90%",
    maxWidth: 400,
    alignSelf: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
    color: "#ffffff",
  },
  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: "#00000030",
  },
  input: {
    flex: 1,
    padding: 14,
    color: "#ffffff",
    outlineStyle: "none",
  },
  passwordInput: {
    flex: 1,
    padding: 14,
    outlineStyle: "none",
    color: "#ffffff",
  },
  icon: {
    marginRight: 8,
  },
  iconContainer: {
    paddingHorizontal: 8,
    cursor: "pointer",
  },
  loginText: {
    marginTop: 20,
    textAlign: "center",
    color: "gray",
  },
  link: {
    color: "gray",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    cursor: "pointer",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RegisterScreen;
