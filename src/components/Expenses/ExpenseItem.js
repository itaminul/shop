import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import { Wrapper, Espenseitem, ExpenseDateDiv, Title, Amount } from './ExpenseItem.style'


const  ExpenseItem = (props) => {

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