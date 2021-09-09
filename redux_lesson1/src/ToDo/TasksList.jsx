import React from 'react';
import { useSelector } from 'react-redux';
import { BtnDelete } from './BtnDelete';

export const TasksList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div>
      <ul>
        {tasks?.map(({ title, id }) => (
          <li key={id}>
            {title} <BtnDelete id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
