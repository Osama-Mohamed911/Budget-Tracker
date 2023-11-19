import "./app.css";

import Header from "./components/Header";
import IncomeExpences from "./components/IncomeExpences";
import Transaction from "./components/Transaction";

function App() {
  return (
    <>
      <Header />
      <IncomeExpences />
      <Transaction />
    </>
  );
}

export default App;
