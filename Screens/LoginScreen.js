import React, { useState } from "react";
import {
  StatusBar,
  View,
  StyleSheet,
  Text,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";

import LogoBack from "../img/Photo.png";

const COURSES = [
  {
    id: "45k6-j54k-4jth",
    title: "HTML",
  },
  {
    id: "4116-jfk5-43rh",
    title: "JavaScript",
  },
  {
    id: "4d16-5tt5-4j55",
    title: "React",
  },
  {
    id: "LG16-ant5-0J25",
    title: "React Native",
  },
];

const LoginScreen = () => {
  const [courses, setCourses] = useState(COURSES);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={LogoBack} style={styles.logo}>
        <FlatList
          style={styles.box}
          data={COURSES}
          renderItem={({ item }) => (
            <Text style={styles.text}>{item.title}</Text>
          )}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </ImageBackground>
      <Text></Text>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  logo: {
    flex: 1,
  },
  box: {
    padding: 100,
  },
  text: {
    color: "#7CFC00",
  },
});
