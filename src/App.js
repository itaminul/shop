import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
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
      <NewExpense />
      <Expenses items={expenses} />
      
       
    </div>
  );
}

export default App;

//4  end 11 start 12