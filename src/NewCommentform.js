import { useRef } from 'react';

import './NewCommentForm.css'
const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    // optional: Could validate here

    // send comment to server
  };

  return (
    <form className="formm" onSubmit={submitFormHandler}>
      <div className="control" onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className="actions">
        <button className='btnn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
