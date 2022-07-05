import React, {useState} from 'react';
import ExpenseDate from '../Expenses/ExpenseDate'
import Card from '../UI/Card'
import { Wrapper, Espenseitem, ExpenseDateDiv, Title, Amount } from './ExpenseItem.style'
function ExpenseItem(props) {
  const [ title, setTitle ] = useState(props.title);

  const clickHandler = () => {
    setTitle('updated')
  }
    return (
        <div>
           
             <Card>
                <Espenseitem>                
                  <ExpenseDateDiv>
                    <ExpenseDate date={props.date} />
                  </ExpenseDateDiv>
                      <p>{title} </p>
                      <p> $ {props.amount}</p>                    
                </Espenseitem>
                <button onClick={clickHandler}>Click me</button>
                </Card>
           
       </div>
    )
}

export default ExpenseItem