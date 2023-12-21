import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import LogoBack from "../img/Photo.png";
import { Button } from "../Components/Button";
import { useState } from "react";

export default function RegistrationScreen() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sandCredential = () => {
    console.log(`Login --- ${login}`);
    console.log(`Email --- ${email}`);
    console.log(`Password --- ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ImageBackground source={LogoBack} style={styles.logo}>
          <View style={styles.infoBox}>
            <View style={styles.logoBox}>
              <Image
                style={styles.avatar}
                source={require("../img/user.jpeg")}
              />
            </View>
            <Text style={styles.titleText}>Реєстрація</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <TextInput
                value={login}
                onChangeText={setLogin}
                style={styles.input}
                placeholder="Логін"
                placeholderTextColor={"#BDBDBD"}
              />
            </KeyboardAvoidingView>

            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <TextInput
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                placeholder="Адреса електронної пошти"
                placeholderTextColor={"#BDBDBD"}
              />
            </KeyboardAvoidingView>

            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <TextInput
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                placeholder="Пароль"
                secureTextEntry={true}
                placeholderTextColor={"#BDBDBD"}
              />
            </KeyboardAvoidingView>
            <Button onPress={sandCredential} title="Зареєстуватися" />
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoBox: {
    width: 132,
    height: 120,
    position: "absolute",
    top: -60,
    left: 128,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  avatar: {
    width: 132,
    height: 120,
    borderRadius: 16,
  },
  titleText: {
    color: "#212121",
    marginTop: 92,
    marginBottom: 33,
    textAlign: "center",
    fontFamily: "RobotoM",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: 500,

    letterSpacing: 0.3,
  },
  infoBox: {
    height: 549,
    marginTop: 295,
    paddingHorizontal: 16,
    backgroundColor: "white",
    borderRadius: "25px 25px 0px 0px",
  },
  logo: {
    flex: 1,
  },
  input: {
    width: "100%",
    backgroundColor: "#F6F6F6",
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 16,
    marginBottom: 16,
  },
  "input:last-child": {
    marginBottom: 0,
  },
});
