import { CardArea } from './Card.style'

const Card = (props) => {
    return <div>
        <CardArea>
        {props.children}
        </CardArea>
        </div>
}

export default Card;