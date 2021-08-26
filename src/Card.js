import { Link } from 'react-router-dom'
import './card.css'
const Card=(props)=>{
    return(
    <div className="quotes">
    <div> <h2>{props.text}</h2>
    <p>~{props.author}</p></div>
    <Link className="Linkk" to={`/quotes/${props.id}`}><button>Details</button></Link>
    </div>


    )
}
export default Card;