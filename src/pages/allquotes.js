import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from '../../src/Card'
import './allquotes.css'




const Allquotes=()=>{
    const [error,se]=useState(null);
  
   const [quotes,sq]=useState([]);

useEffect(    async function getquotes(){
   
    console.log('Hellow');
    try{
     const response = await fetch("https://react-https-a2dfa-default-rtdb.firebaseio.com/quotes.json");
     if(!response.ok){
         throw new Error('Something went Wrong');
     }
     const data= await response.json();
     let quote=[];
     for(const key in data){
         quote.push({
          id:data[key].id,
          author:data[key].author,
          text:data[key].text


         })
     }
   
sq(quote);
console.log(quote);
    }catch(error){
        se(error.message);
    }


    },[]);


return (<div className="allquotes">
  
   {quotes.map((e)=>{
       return (
           <Card author={e.author} text={e.text} id={e.id}/>
       )
   })}
   
    </div>
)

}
export default Allquotes;
