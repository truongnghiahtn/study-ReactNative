import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  useWindowDimensions,
} from "react-native";
import ButtonPrimary from "../components/ButtonPrimary";
import { useState } from "react";
import { Colors } from "../util/color";
import Card from "../components/Card";
import Title from "../components/Title";
import TitleSecond from "../components/TitleSecond";
const StartGameScreen = ({ confirmNumber }) => {
  const [numberValue, setNumberValue] = useState("");

  const { width, height } = useWindowDimensions();

  const changeValue = (value) => {
    setNumberValue(value);
  };

  const comfirm = () => {
    const number = parseInt(numberValue);
    if (isNaN(number) || number <= 0 || number > 99) {
      Alert.alert("invalid value", "number is valid", [
        { text: "ok", style: "destructive", onPress: resetValue },
      ]);
      return;
    }
    confirmNumber(number);
  };
  const resetValue = () => {
    setNumberValue("");
  };
  const marginTopDistant = height < 400 ? 30 : 100;
  console.log(marginTopDistant);
  return (
    <View style={[styles.containerRoot, {marginTop: marginTopDistant }]}>
      <Title>Play Game</Title>
      <Card>
        <TitleSecond>Enter Number</TitleSecond>
        <TextInput
          style={styles.numberInput}
          keyboardType="number-pad"
          maxLength={2}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={changeValue}
          value={numberValue}
        />
        <View style={styles.containerButtons}>
          <View style={styles.containerButton}>
            <ButtonPrimary onPress={resetValue}>Reset</ButtonPrimary>
          </View>
          <View style={styles.containerButton}>
            <ButtonPrimary onPress={comfirm}>Conmfirm</ButtonPrimary>
          </View>
        </View>
      </Card>
    </View>
  );
};
export default StartGameScreen;

const styles = StyleSheet.create({
  containerRoot: {
    flex: 1,
    // marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.colorPrimary_4,
    borderBottomWidth: 2,
    color: Colors.colorPrimary_4,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  containerButtons: {
    flexDirection: "row",
  },
  containerButton: {
    flex: 1,
  },
});
