import React from "react";
import { Header } from "./components/Header";
import './App.css';
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TrasactionList } from "./components/TrasactionList";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";


function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TrasactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}


export default App;
