import { useFonts } from "expo-font";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

export default function App() {
  // add fonts
  const [fontsLoaded] = useFonts({
    RobotoM: require("./assets/fonts/Roboto-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return <RegistrationScreen />;
}
