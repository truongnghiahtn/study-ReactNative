import { View, StyleSheet, Dimensions } from "react-native";
import { Colors } from "../util/color";
const Card = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};
export default Card;

const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 28 : 32,
    marginHorizontal: 12,
    padding: 16,
    backgroundColor: Colors.colorPrimary_1,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
});
