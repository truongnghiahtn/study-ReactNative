import { StyleSheet, Text, Dimensions,useWindowDimensions } from "react-native";
import { Colors } from "../util/color";

const Title = ({ children }) => {
  return <Text style={styles.titleText}>{children}</Text>;
};
export default Title;
const deviceWidth = Dimensions.get("window").width;
console.log(deviceWidth);
const styles = StyleSheet.create({
  titleText: {
    fontSize: deviceWidth < 380 ? 18 : 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 0,
    borderColor: "white",
    padding: 12,
  },
});
