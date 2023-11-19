import React, { useContext, useState } from "react";
import { globalContext } from "../context/GlobalState";

const AddTransaction = (props) => {
  const [text, setText] = useState("");
  const [amount, setAmout] = useState(0);
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const { addTransaction } = useContext(globalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 1000),
      text,
      date,
      type,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setAmout(0);
    setDate(0);
    setText("");
    setType("");
    props.onCancel();
  };
  return (
    <div className="from-parent ">
      <div className="form-child container w-50">
        <div className="h-f">
          <h5 className="mb-3 pb-3 text-white ms-2 ">Add New Transaction</h5>
          <span
            style={{ color: "#ccc", fontSize: "21px", cursor: "pointer" }}
            className="me-4"
            onClick={props.onCancel}
          >
            x
          </span>
        </div>

        <form onSubmit={onSubmit}>
          {/* Description input */}
          <div className="form-floating w-100 mb-3">
            <input
              type="text"
              className="form-control  "
              id="floatingInput"
              placeholder="Description"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
            <label htmlFor="floatingInput">Description</label>
          </div>
          {/* Date input */}
          <div className="form-floating w-100 mb-3">
            <input
              type="date"
              className="form-control "
              id="floatingInput"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <label htmlFor="floatingInput">Date</label>
          </div>
          {/* Types input */}
          <div className="d-flex ">
            <p className="text-white me-5"> Transaction Type :</p>
            <input
              type="radio"
              className="btn-check "
              name="options-outlined"
              id="success-outlined"
              autoComplete="off"
              value={type}
              onClick={() => setType("income")}
              required
            />
            <label
              className="btn btn-outline-success me-3"
              htmlFor="success-outlined"
            >
              Income
            </label>

            <input
              type="radio"
              className="btn-check"
              name="options-outlined"
              id="danger-outlined"
              autoComplete="off"
              value={type}
              onClick={() => setType("Expense")}
              required
            />
            <label className="btn btn-outline-danger" htmlFor="danger-outlined">
              Expense
            </label>
          </div>

          {/* Amount input */}
          <div className="form-floating w-100 mb-3 mt-3">
            <input
              type="number"
              className="form-control  "
              id="floatingInput"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmout(e.target.value)}
              required
            />
            <label htmlFor="floatingInput">Amount</label>
          </div>
          <div>
            <button type="submit" className="add-botn w-100">
              Add Transaction
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
