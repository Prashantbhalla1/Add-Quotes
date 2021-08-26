import { useState } from 'react';

import "./comment.css"

import NewCommentForm from './NewCommentform';

const Comment = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  
  return (
    <section className="comments">
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btnn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm />}
      <p>Comments...</p>
    </section>
  );
};

export default Comment;