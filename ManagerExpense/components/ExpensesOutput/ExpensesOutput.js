import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../inits/global";
const ExpensesOutput = ({ expenses, periodName }) => {

  const data = {
    expenses:expenses,
    periodName,
  };
  return (
    <View style={styles.container}>
      <ExpensesSummary {...data} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};
export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor:GlobalStyles.colors.primary800
  },
});
