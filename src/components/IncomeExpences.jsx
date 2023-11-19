import { useContext } from "react";
import Balance from "./Balance";
import { globalContext } from "../context/GlobalState";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown } from "react-icons/fa";

const IncomeExpences = () => {
  const { transaction } = useContext(globalContext);
  const summary = transaction.reduce(
    (acc, curent) => {
      if (curent.type === "income") {
        acc.income += curent.amount;
        acc.total += curent.amount;
      } else {
        acc.expense += curent.amount;
        acc.total -= curent.amount;
      }
      return acc;
    },
    {
      income: 0,
      expense: 0,
    }
  );

  return (
    <div className="container m-auto position-relative">
      <div className="d-flex align-items-center justify-content-lg-center gap-5 position-absolute parent">
        <div className="box">
          <div className="me-5">
            <h5 className=" fs-6">Expense</h5>
            <span className="text-white">{summary.expense} EGP </span>
          </div>
          <div>
            <FaRegArrowAltCircleDown
              style={{ fontSize: "20px" }}
              className="text-danger"
            />
          </div>
        </div>
        <div className="box">
          <div className="me-5">
            <h5 className=" fs-6">Income</h5>
            <span className="text-white">{summary.income} EGP </span>
          </div>

          <div>
            <FaRegArrowAltCircleUp
              style={{ fontSize: "20px" }}
              className="text-success"
            />
          </div>
        </div>

        <Balance />
      </div>
    </div>
  );
};

export default IncomeExpences;
