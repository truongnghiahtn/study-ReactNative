import { StyleSheet, View, Text, Pressable } from "react-native";

const ButtonPrimary = ({ children, onPress }) => {


  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.press]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{color:"#640233"}}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};
export default ButtonPrimary;
const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius:28,
    margin:4,
    overflow:"hidden"
  },
  buttonInnerContainer: {
    backgroundColor:"#72063c",
    paddingHorizontal:16,
    paddingVertical:8,
    elevation:4
  },
  press: {
    opacity:0.75
  },
  buttonText: {
    textAlign:"center",
    color:"white"
  },
});
