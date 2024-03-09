import { createContext, useReducer } from "react";

export const ExpenContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  setExpenses:(expenses)=>{},
  deleteExpense: (id) => {},
  updateExpense: ({ id, description, amount, date }) => {},
});

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      const newStateAdd = { ...state };
      console.log(action.payload);
      newStateAdd.expenses = [
        ...newStateAdd.expenses,
        { ...action.payload, id: Math.random() },
      ];
      return newStateAdd;
    case 'SET':
      const newExpenses= {...state};
      newExpenses.expenses=[...action.payload]
      return newExpenses;
    case "DELETE":
      const newStateDelete = { ...state };
      newStateDelete.expenses = newStateDelete.expenses.filter((item) => {
        return item.id != action.payload;
      });
      console.log(newStateDelete);
      return newStateDelete;
    case "UPDATE":
      const newStateUpdate = { ...state };
      const index = newStateUpdate.expenses.findIndex((item) => {
        return item.id === action.payload.id;
      });
      newStateUpdate.expenses[index] = { ...state.expenses[index], ...action.payload };
      return newStateUpdate;
    default:
      break;
  }
}
const ExpenseContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    expenses: [],
  });

  const addExpense = (data) => {
    dispatch({ type: "ADD", payload: data });
  };
  const setExpenses = (expenses) => {
    dispatch({ type: "SET", payload: expenses });
  };
  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };
  const updateExpense = (data) => {
    dispatch({ type: "UPDATE", payload: data });
  };

  const value = {
    state: state,
    setExpenses:setExpenses,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpenContext.Provider value={value}>{children}</ExpenContext.Provider>
  );
};
export default ExpenseContextProvider;
