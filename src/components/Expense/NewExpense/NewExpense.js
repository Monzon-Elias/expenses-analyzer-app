import { useState } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [clicked, setClicked] = useState(false);

  const saveExpDataHandler = (enteredExpData) => {
    const expData = { ...enteredExpData, id: Date.now() };
    props.onAddExp(expData);
  };

  return (
    <div className="new-expense">
      {clicked === false ? (
        <div>
          <button className="new-expense" onClick={() => setClicked(true)}>
            Add New Expense
          </button>
        </div>
      ) : (
        <ExpenseForm
          onSaveExpData={saveExpDataHandler}
          onCancel={() => setClicked(false)}
        />
      )}
    </div>
  );
};

export default NewExpense;
