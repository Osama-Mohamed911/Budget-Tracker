import React, { useContext } from "react";
import TransactionList from "./TransactionList";
import { globalContext } from "../context/GlobalState";

const Transaction = () => {
  const { transaction } = useContext(globalContext);
  return (
    <div className="container py-5">
      <h4
        className="border-bottom border-secondary pb-3"
        style={{ color: "#ccc" }}
      >
        Transaction History
      </h4>

      {transaction.map((trans) => (
        <TransactionList key={trans.id} trans={trans} />
      ))}
    </div>
  );
};

export default Transaction;
