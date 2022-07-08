import React, { useState } from 'react'
import { FormContainer, FormContainerTitle, FormContainerAmount, FormContainerDate, FormContainerSubmitButton } from './ExpenseForm.style';
const ExpenseFrom = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enterdTitle: '',
    //     enterdAmount: '',
    //     enteredDate: ''
        
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enterdTitle: event.target.value
        // });

        // setUserInput((prevState) => {
        //     return {...prevState, enterdTitle: event.target.value}
        // })
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enterdAmount: event.target.value
        // });
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enterdDate: event.target.value
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseDate = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        console.log(expenseDate);
    }

    return (
       
        <form onSubmit={submitHandler}>
            <FormContainer>
                <FormContainerTitle>
                <label htmlFor="">Title</label>
                <input type="text" onClick={titleChangeHandler} />
                </FormContainerTitle>
                <FormContainerAmount>
                <label htmlFor="">Amount</label>
                <input type="text" onClick={amountChangeHandler} />
                </FormContainerAmount>
                <FormContainerDate>
                <label htmlFor="">Date</label>
                <input type="text" onClick={dateChangeHandler} />
                </FormContainerDate>
                <div>
                <button type='submit' >Save</button>
            </div>
            </FormContainer>


        </form>
    )

}
export default ExpenseFrom;