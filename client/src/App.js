import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { Expenses } from "./components/Expenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
import "./App.css";

// Add edit pop up to allow user to edit the expense

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Expenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
