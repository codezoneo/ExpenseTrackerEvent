// ExpenseTracker.js
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseItem.css";

function ExpenseTracker() {
  // State to track expenses
  const [expenses, setExpenses] = useState([
    { id: 1, title: "Car insurance", amount: 200 },
    // Add more expenses as needed
  ]);

  return (
    <div className="expense-tracker">
      <h1>Expense Tracker</h1>

      {/* Display each expense using ExpenseItem component */}
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
        />
      ))}

      {/* Form to add new expenses */}
      <form>
        <label>
          Expense Title:
          <input type="text" />
        </label>
        <label>
          Expense Amount:
          <input type="number" />
        </label>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseTracker;
