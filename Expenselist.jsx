import React from "react";

function ExpenseList({ expenses, deleteExpense }) {
  return (
    <div className="card">
      <h3>Expense List</h3>
      {expenses.length === 0 ? (
        <p>No expenses added.</p>
      ) : (
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.name} - ₹{expense.amount}
              <button onClick={() => deleteExpense(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;