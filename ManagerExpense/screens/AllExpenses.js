import { View, Text, StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import LoadingOverlay from "../components/LoadinngOverlay";
import { getExpense } from "../inits/http";

import { ExpenContext } from "../store/ExpenContext";

const AllExpenses = () => {
  const expenseData = useContext(ExpenContext);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    const data = await getExpense();
    expenseData.setExpenses(data);
    setIsLoading(false);
  };
  if(isLoading)
  {
    return <LoadingOverlay/>
  }
  console.log(expenseData.state.expenses);
  return (
    <ExpensesOutput expenses={expenseData.state.expenses} periodName="Total" />
  );
};
export default AllExpenses;
const styles = StyleSheet.create({
  container: {},
});
