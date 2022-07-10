import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.style'
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChnageHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    return (
        <Card>
            
        <ExpensesFilter selected={filteredYear} onChnageFilter={filterChnageHandler}/>
        {props.items.map((expense) => (
            <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
             />
        ))}
        </Card>
    )
}

export default Expenses;




