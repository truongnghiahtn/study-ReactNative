import { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ButtonIcon from "../components/button/ButtonIcon";
import { GlobalStyles } from "../inits/global";
import ButtonCustom from "../components/button/ButtonCustom";
import { useContext } from "react";
import { ExpenContext } from "../store/ExpenContext";
import FormExpense from "../components/Form/FormExpense";
import { postExpense } from "../inits/http";
const ManagerExpenses = ({ route, navigation }) => {
  const idExpense = route.params?.id;
  const isIdExpense = !!idExpense;
  const expenseCtx = useContext(ExpenContext);
  const [data, setData] = useState(null);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isIdExpense ? "Edit Expense" : "Add Expense",
    });
  }, [isIdExpense, navigation]);
  useEffect(() => {
    if (isIdExpense) {
      let data = expenseCtx.state?.expenses?.find(
        (item) => item.id === idExpense
      );
      setData(data);
    } else {
      setData(null);
    }
  }, []);

  const deleteItem = () => {
    expenseCtx.deleteExpense(idExpense);
    navigation.goBack();
  };
  const handleCancel = () => {
    navigation.goBack();
  };

  const handleConfirm = (expense) => {
    const data = {
      description: expense.description,
      amount: +expense.amount,
      date: new Date(expense.date),
    };
    if (!isIdExpense) {
      expenseCtx.addExpense(data);
      postExpense(data);
      navigation.goBack();
    } else {
      expenseCtx.updateExpense({...data,id:idExpense});
      navigation.goBack();
    }
    
  };
  return (
    <View style={styles.container}>
      <FormExpense
        title={isIdExpense ? "Update expense" : "Create expense"}
        data={data}
        handleCancel={handleCancel}
        handleConfirm={handleConfirm}
        isIdExpense={isIdExpense}
      />
      {isIdExpense && (
        <View style={styles.deleteContainer}>
          <ButtonIcon
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteItem}
          />
        </View>
      )}
    </View>
  );
};
export default ManagerExpenses;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
