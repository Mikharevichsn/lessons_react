import React from 'react';
import './CommentsList.scss';

export const CommentsList = ({ list, className }) => {
  return (
    <div className={className}>
      <ul className="comments-list">
        {list?.map(({id, author, text, date}) => (
          <li key={id} className="comment">
            <span className="author">{author}</span>
            <p>{text}</p>
            <span className="date">{date}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
