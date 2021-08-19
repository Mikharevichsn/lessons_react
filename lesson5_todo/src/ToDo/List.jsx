import React from 'react';
import cn from 'classnames';
import './List.css';

export const List = ({ list = [] }) => {
  return (
    <ul>
      {list &&
        list.map((item, ind) => {
          console.log(
            '🚀 ~ file: List.jsx ~ line 8 ~ {list&&list.map ~ item',
            item
          );
          return (
            <li key={ind} className={cn('task', { 'task-done': item.isDone })}>
              {item.text}
            </li>
          );
        })}
    </ul>
  );
};
