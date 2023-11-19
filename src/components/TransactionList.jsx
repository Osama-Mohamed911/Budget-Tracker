import React, { useContext } from "react";
import { globalContext } from "../context/GlobalState";
import { FaTrash } from "react-icons/fa";

const TransactionList = ({ trans }) => {
  const { deleteTransaction } = useContext(globalContext);
  return (
    <ul>
      <li>{trans.text}</li>
      <li>{trans.date}</li>
      <li>{trans.type}</li>
      <li className={trans.type === "income" ? "text-success" : "text-danger"}>
        {trans.amount}
      </li>
      <li>
        <button
          className="btn btn-danger me-2"
          onClick={() => deleteTransaction(trans.id)}
        >
          <FaTrash />
        </button>
      </li>
    </ul>
  );
};

export default TransactionList;
