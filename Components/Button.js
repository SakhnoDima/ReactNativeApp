import { Pressable, Text, StyleSheet } from "react-native";

export const Button = (props) => {
  const { title = "Ok", onPress } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 15,
    marginTop: 27,
    paddingVertical: 16,
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
  },
});
