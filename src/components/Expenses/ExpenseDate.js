import { DateContainer, DateTitile } from './ExpenseDate.style'
function ExpenseDate(props) {
    const month = props.date?.toLocaleString('es-US', { month: 'long'});
    const day = props.date?.toLocaleString('es-US', { day: '2-digit'});
    const year = props.date?.getFullYear();
        return(
            <div>                        
                <DateContainer>
                       <DateTitile>
                            {month} 
                            <br/>
                            {year} 
                            <br/>
                            {day}   
                        </DateTitile>                           
                </DateContainer>
            </div>
        )

}
export default ExpenseDate;