// ExpenseItem.js
import React from "react";
import "./ExpenseItem.css";

function ExpenseItem({ title, amount }) {
      const handleDeleteClick = () => {
        console.log(`Expense "${title}" deleted`);
        
      };
  return (
    <div className="expense-item">
      <div>
        <h2>{title}</h2>
        <div className="expense-item_price">${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
