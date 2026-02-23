import React, { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount) return;

    addExpense({
      name,
      amount: Number(amount),
    });

    setName("");
    setAmount("");
  };

  return (
    <div className="card">
      <h3>Add Expense</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Expense name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          value={amount}
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ExpenseForm;