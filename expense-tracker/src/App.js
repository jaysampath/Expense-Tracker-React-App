import "./App.css";
import NewExpense from "./components/NewExpense";
import Expenses from "./components/Expenses";
import { useState } from "react";

const dummy_expenses = [
  {
    id:'e1',
    title: "Car Insurance",
    amount: 260,
    date: new Date(2021, 7, 17),
  },
  {
    id:'e2',
    title: "New TV",
    amount: 150,
    date: new Date(2020, 3, 15),
  },
  {
    id:'e3',
    title: "New AC",
    amount: 500,
    date: new Date(2021, 0, 4),
  },
];

function App() {
 const [expenses,setExpenses]= useState(dummy_expenses);

  const addExpenseHandler = (expense) =>{
      // console.log('in App.js',expense);
       setExpenses( prevExpenses => {
         return [expense, ...prevExpenses]
       });
  };

  return (
    <div className="App">
      <h1>Expense Tracker App</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <div id="appExpenses">
        <Expenses items={expenses} />
      </div>
    </div>
  );
}

export default App;
