import { View, StyleSheet, Pressable,Text } from "react-native";
import { GlobalStyles } from "../../inits/global";
const ButtonCustom = ({ children, mode, style, onPress }) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
            pressed ? styles.presse : null,
          ]}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};
export default ButtonCustom;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    alignItems: "center",
    textAlign:"center"
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  presse: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
