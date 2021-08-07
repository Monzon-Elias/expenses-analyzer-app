import "./App.css";
import { useState } from "react";
import Expenses from "./components/Expense/Expenses/Expenses";
import NewExpense from "./components/Expense/NewExpense/NewExpense";
import dummyExpenses from "./DummyExpenses";

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpHandler = (expense) =>
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);

  return (
    <div>
      <NewExpense onAddExp={addExpHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
