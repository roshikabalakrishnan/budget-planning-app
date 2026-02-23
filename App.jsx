import React, { useState } from "react";

function App() {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = () => {
    if (!name || !amount) return;

    const newExpense = {
      name,
      amount: Number(amount),
    };

    setExpenses([...expenses, newExpense]);
    setName("");
    setAmount("");
  };

  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const totalExpenses = expenses.reduce(
    (total, item) => total + item.amount,
    0
  );

  const balance = income - totalExpenses;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Budget Planner</h1>

      <h3>Enter Income</h3>
      <input
        type="number"
        value={income}
        onChange={(e) => setIncome(Number(e.target.value))}
      />

      <h3>Add Expense</h3>
      <input
        type="text"
        placeholder="Expense name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={addExpense}>Add</button>

      <h3>Expenses</h3>
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

      <h2>Summary</h2>
      <p>Total Income: ₹{income}</p>
      <p>Total Expenses: ₹{totalExpenses}</p>
      <h3>Balance: ₹{balance}</h3>
    </div>
  );
}

export default App;