import { View, StyleSheet, Text } from "react-native";
import Input from "./Input";
import { useEffect, useState } from "react";
import { formatDate } from "../../inits/date";
import ButtonCustom from "../button/ButtonCustom";
const FormExpense = ({
  title,
  data,
  handleCancel,
  handleConfirm,
  isIdExpense
}) => {
  const [inputsValue, setInputsValue] = useState({
    amount: "",
    description: "",
    date: "",
  });
  useEffect(() => {
    if (data !== null) {
      setInputsValue((curState) => {
        return {
          amount: `${data.amount}`,
          description: data.description,
          date: formatDate(data.date),
        };
      });
    }
  }, [data]);

  const onChangeText = (type, text) => {
    setInputsValue((curState) => {
      return { ...curState, [type]: text };
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.innerInput}>
        <Input
          label={"Amount"}
          keyboardType={"decimal-pad"}
          onChangeText={(text) => onChangeText("amount", text)}
          style={styles.input}
          value={inputsValue.amount}
        />
        <Input
          label={"Date"}
          placeholder={"YYYY-MM-DD"}
          maxLength={10}
          onChangeText={(text) => onChangeText("date", text)}
          style={styles.input}
          value={inputsValue.date}
        />
      </View>
      <Input
        label={"Description"}
        multiline={true}
        onChangeText={(text) => onChangeText("description", text)}
        value={inputsValue.description}
      />
      <View style={styles.buttons}>
        <ButtonCustom style={styles.button} onPress={handleCancel} mode="flat">
          Cancel
        </ButtonCustom>
        <ButtonCustom style={styles.button} onPress={()=>{handleConfirm(inputsValue)}}>
          {isIdExpense ? "Update" : "Add"}
        </ButtonCustom>
      </View>
    </View>
  );
};
export default FormExpense;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  innerInput: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
