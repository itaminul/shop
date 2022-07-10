import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import { Wrapper, Espenseitem, ExpenseDateDiv, Title, Amount } 
from './ExpenseItem.style'


const  ExpenseItem = (props) => {

    return (
        <div>
              <Card>
                <Espenseitem>                
                  <ExpenseDateDiv>
                    <ExpenseDate date={props.date} />
                  </ExpenseDateDiv>
                      <p>{props.title} </p>
                      <p> $ {props.amount}</p>                    
                </Espenseitem>
              
                </Card>           
       </div>
    )
}

export default ExpenseItem