import { View, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const ButtonIcon = ({ icon, size, color, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => {
        pressed && styles.pressed;
      }}
    >
      <View style={styles.butonContainer}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
};
export default ButtonIcon;

const styles = StyleSheet.create({
  butonContainer: {
    borderRadius: 4,
    padding: 6,
    marginHorizontal:8,
    marginVertical:2
  },
  pressed: {
    opacity: 0.75,
  },
});
