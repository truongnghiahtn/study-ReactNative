import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

const Button = ({ children, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.conatinerButton,
        pressed && styles.pressed,
      ]}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};
export default Button;

const styles = StyleSheet.create({
  conatinerButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginVertical:8,
    marginHorizontal:4,
    backgroundColor: Colors.primary500,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    elevation:2,
    shadowColor:"black",
    shadowOpacity:0.2,
    shadowRadius:2,
    shadowOffset:{width:1,height:1}
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    fontWeight:"bold"
  },
});
