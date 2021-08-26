import { useContext, useState } from "react";
import { Prompt, useHistory, useParams } from "react-router-dom";
import "./newquotes.css";


const Newquotes = () => {

  const [text, st] = useState('');
  const [author, sa] = useState('');
  const [entry, se] = useState(0);
  const history = useHistory();

  async function submithandler(e) {
    se(0);
    e.preventDefault();
    if(author==='' && text==='' ){

    }
    else{
    const quote = {
      id: author[0] + "q1",
      text: text,
      author: author,
    };
    console.log(quote);
    fetch("https://react-https-a2dfa-default-rtdb.firebaseio.com/quotes.json", {
      method: "POST",
      body: JSON.stringify(quote),
      headers: {
        "content-Type": "application/json",
      },
    });

    const response = await fetch(
      "https://react-https-a2dfa-default-rtdb.firebaseio.com/quotes.json"
    );
    if (!response.ok) {
      throw new Error("Something went Wrong");
    }
    const data = await response.json();
    let quotes = [];
    for (const key in data) {
      quotes.push({
        id: data[key].id,
        author: data[key].author,
        text: data[key].text,
      });
    }
   

    st('');
    sa('');
    
   
    history.push("/quotes");
  }
  st('');
  sa('');
  
  }
  const authorhandler = (e) => {
    sa(e.target.value);
  };
  const texthandler = (e) => {
    st(e.target.value);
  };
  const focushandler = () => {
    se(1);
  };
  const sub = () => {
    se(0);
  };
  return (
    <>
      <Prompt
        when={entry}
        message={(location) =>
          "Are you sure ? If you leave your whole data will be lost !"
        }
      />
      <form onFocus={focushandler} onSubmit={submithandler}>
        <input
          type="text"
          placeholder="Author"
          onChange={authorhandler}
          value={author}
          required
        ></input>
        <textarea
          cols="25"
          rows="10"
          placeholder="Text"
          onChange={texthandler}
          required
          value={text}
        ></textarea>
        <button className="btn" onClick={sub}>
          +Add
        </button>
      </form>
    </>
  );
};
export default Newquotes;
