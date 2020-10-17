import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

// Add date component to allow user to add the date of transaction

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text" />
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What's the transaction?"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, postive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount of transaction"
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};
