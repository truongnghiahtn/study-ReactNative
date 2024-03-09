import axios from "axios";

const BACKEND =
  "https://react-native-3b863-default-rtdb.asia-southeast1.firebasedatabase.app/";

export const postExpense = (data) => {
  axios
    .post(`${BACKEND}expenses.json`, data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getExpense = async (data) => {
  const response = await axios.get(`${BACKEND}expenses.json`);
  const expenses = [];
  for (const key in response.data) {
    if (Object.hasOwnProperty.call(response.data, key)) {
      const element = response.data[key];
      const expenseObject = {
        id: key,
        description: element.description,
        amount: element.amount,
        date: element.date,
      };
      expenses.push(expenseObject);
    }
  }
  console.log(expenses);
  return expenses;
};
