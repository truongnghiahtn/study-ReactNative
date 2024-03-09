import { View, Text, StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";

import { ExpenContext } from "../store/ExpenContext";
const RecentExpenses = () => {

  const expenseData=useContext(ExpenContext);
  return (
    <ExpensesOutput expenses={expenseData.state.expenses} periodName="Last 7 Days"/>
  );
};
export default RecentExpenses;
const styles= StyleSheet.create({
    container:{
        
    }
})
