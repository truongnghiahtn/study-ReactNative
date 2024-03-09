import { StyleSheet, Text} from "react-native";
import { Colors } from "../util/color";

const TitleSecond = ({ children,style }) => {
  return <Text style={[styles.titleText,style]}>{children}</Text>;
};
export default TitleSecond;
const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.colorPrimary_4,
    textAlign: 'center'
  },
});
