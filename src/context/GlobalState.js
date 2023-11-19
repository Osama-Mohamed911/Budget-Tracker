import { createContext, useEffect, useReducer } from "react";
import { AppReducer } from "./AppReducer";
// initial state
const initialState = {
  transaction: localStorage.getItem("transaction")
    ? JSON.parse(localStorage.getItem("transaction"))
    : [],
};

// create context
export const globalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // localStorage
  useEffect(() => {
    localStorage.setItem("transaction", JSON.stringify(state.transaction));
  }, [state]);
  // ACTIONS
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };
  const addTransaction = (transactions) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transactions,
    });
  };
  return (
    <globalContext.Provider
      value={{
        transaction: state.transaction,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};
