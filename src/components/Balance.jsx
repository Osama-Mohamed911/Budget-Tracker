import { useContext } from "react";
import { globalContext } from "../context/GlobalState";
import { FaDollarSign } from "react-icons/fa";

const Balance = () => {
  const { transaction } = useContext(globalContext);
  const total = transaction.reduce((acc, curent) => {
    return curent.type === "Expense"
      ? acc - curent.amount
      : acc + curent.amount;
  }, 0);
  return (
    <div className="balance ">
      <div className="me-5">
        <h4 className="fs-5">Balance</h4>
        <span className="fw-bold">{total} EGP </span>
      </div>
      <div>
        <FaDollarSign style={{ fontSize: "20px" }} />
      </div>
    </div>
  );
};

export default Balance;
