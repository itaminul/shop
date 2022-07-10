import React from 'react'
import { FilterContent } from './ExpensesFilter.style';
const ExpensesFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }

        return (
            <FilterContent>
                <label htmlFor="">Filter by year</label>
                <select name="" id="" value={props.selected} onChange={dropdownChangeHandler}>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                </select>
            </FilterContent>
        )
    
}

export default ExpensesFilter;