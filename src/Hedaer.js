
import { NavLink } from "react-router-dom"
import "./Header.css"
import  classes  from "./Header.css";



const Head=(props)=>{
  return (
    <>
      <header className="head">
        <h1>Great Quotes</h1>
         
         <ul>
          
             <li  ><NavLink activeClassName="white" className="link" to="/quotes">All Quotes</NavLink></li>
             <li  ><NavLink activeClassName="white" className="link" to="/newquotes">Add Quotes</NavLink></li>



         </ul>

        
      </header>

      
    </>
  );
};

export default Head;
