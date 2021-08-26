import './high.css'
const Highlighted=(props)=>{
    return (
     <div className="black">
<p>{props.text}</p>
<div><h6>~{props.author}</h6></div>

     </div>


    )
}
export default Highlighted;