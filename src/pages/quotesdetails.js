import { useState } from "react";
import { Link, Route, useParams } from "react-router-dom"
import Comment from "../../src/comments"
import Highlighted from './high.js'

function Quotesdetails(){
    const param=useParams();
    const [text,st]=useState('');
    const [author,sa]=useState('');

   fetch(
        "https://react-https-a2dfa-default-rtdb.firebaseio.com/quotes.json"
      ).then((response)=>{return response.json()}).then((data)=>{
        for (const key in data) {
            
            if(data[key].id===param.quotesid){

           st(data[key].text);
           sa(data[key].author);

 
                break;
            }

                
               
            }
          }
      ) 
  
    

    return(
        <>
       
       <Highlighted text={text} author={author}/> 

<Comment/>

        
</>
    )
}
export default Quotesdetails;