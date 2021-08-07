import { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesChart from "../ExpensesChart";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => setFilteredYear(selectedYear);
  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {filteredExpenses.length === 0 ? (
        <h4>No expenses found</h4>
      ) : (
        filteredExpenses.map((expense, i) => (
          <ExpenseItem
            key={i}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </div>
  );
};

export default Expenses;
