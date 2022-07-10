import React, { useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Facial Tissue', amount: 294.67, date: new Date(2022, 7, 4)},
  { id: 'e2',title: 'New TV', amount: 294.67, date: new Date(2023, 7, 4)},
  { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2024, 7, 4)},
  { id: 'e4', title: 'New Desk', amount: 294.67, date: new Date(2021, 7, 4)},
]
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }
  return (
    <div>
      <h2>Les's get stgarted</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />    
       
    </div>
  );
}

export default App;

//5  end 7 start 8