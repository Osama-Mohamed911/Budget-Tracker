import React, { useState } from "react";
import { GiTakeMyMoney } from "react-icons/gi";
import AddTransaction from "./AddTransaction";
import BackDrop from "./ui/BackDrop";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openHandelr = () => {
    setIsOpen(true);
  };
  const closeHandelr = () => {
    setIsOpen(false);
  };
  return (
    <div className="header">
      <div className="container d-flex justify-content-between mb-3 py-5">
        <h2 className="text-white fs-3 d-flex justify-content-center align-items-center">
          <GiTakeMyMoney style={{ fontSize: "40px", color: "#b4fc56" }} />{" "}
          Budget Tracker
        </h2>
        <button className="t-botn" onClick={openHandelr}>
          New Transaction
        </button>
      </div>
      {isOpen && <AddTransaction onCancel={closeHandelr} />}
      {isOpen && <BackDrop onCancel={closeHandelr} />}
    </div>
  );
};

export default Header;
