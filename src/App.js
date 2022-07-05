import ExpenseItem from "./components/Expenses/ExpenseItem";

function App() {
  const expenses = [
    { id: 'e1', title: 'Facial Tissue', amount: 294.67, date: new Date(2022, 7, 4)},
    { id: 'e2',title: 'New TV', amount: 294.67, date: new Date(2022, 7, 4)},
    { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2022, 7, 4)},
    { id: 'e4', title: 'New Desk', amount: 294.67, date: new Date(2022, 7, 4)},
  ]
  return (
    <div>
      <h2>Les's get stgarted</h2>
      <ExpenseItem 
      title={expenses[0].title}
       amount={expenses[0].amount}
        date={expenses[0].date}
        />
       
        <ExpenseItem 
      title={expenses[1].title}
       amount={expenses[1].amount}
        date={expenses[1].date}
        />
      
        <ExpenseItem 
      title={expenses[2].title}
       amount={expenses[2].amount}
        date={expenses[2].date}
        />     
        <ExpenseItem 
      title={expenses[3].title}
       amount={expenses[3].amount}
        date={expenses[3].date}
        />
       
    </div>
  );
}

export default App;

//4  end 4 start 5