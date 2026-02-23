import React from "react";

function Income({ income, setIncome }) {
  return (
    <div className="card">
      <h3>Enter Income</h3>
      <input
        type="number"
        value={income}
        onChange={(e) => setIncome(Number(e.target.value))}
        placeholder="Enter income"
      />
    </div>
  );
}

export default Income;