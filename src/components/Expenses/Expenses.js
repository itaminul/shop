import React, { useState } from "react";
import Card from "../UI/Card";
import './Expenses.style'
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChnageHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <Card>
            
        <ExpensesFilter
         selected={filteredYear} 
         onChnageFilter={filterChnageHandler}
         />

        <ExpensesList items={filteredExpenses} />
        </Card>
    )
}

export default Expenses;




