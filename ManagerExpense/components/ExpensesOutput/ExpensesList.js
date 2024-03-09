import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import ExpensesItem from "./ExpensesItem";
const ExpensesList = ({ expenses }) => {
  const renderListExpenses = (itemData) => {
    // const data = {
    //   description: itemData.item.description,
    //   amount: itemData.item.amount,
    //   date: itemData.item.date,
    // };
    return <ExpensesItem {...itemData.item} />;
  };
  return (
    <>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={renderListExpenses}
      />
    </>
  );
};
export default ExpensesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
