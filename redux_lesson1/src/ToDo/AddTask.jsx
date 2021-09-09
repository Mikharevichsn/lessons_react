import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

export const AddTask = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState('');
  return (
    <div>
      <input
        type='text'
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(addTask(task));
          setTask('');
        }}
      >
        Добавить
      </button>
    </div>
  );
};
