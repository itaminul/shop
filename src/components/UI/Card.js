import { CardArea } from './Card.style'

function Card(props) {
    return <div>
        <CardArea>
        {props.children}
        </CardArea>
        </div>
}

export default Card;