import React from 'react';

export const List = ({ list }) => {
  return (
    <ul>
      {list.map((item) => {
        return <li>{item.text}</li>;
      })}
    </ul>
  );
};
