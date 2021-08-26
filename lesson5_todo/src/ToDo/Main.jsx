import React, { useEffect, useState } from 'react';
import { AddTask } from './AddTask';
import { Header } from './Header';
import { List } from './List';

export const Main = () => {
  const [taskList, setTaskList] = useState(null);

  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem('tasks'));
      console.log('🚀 ~ file: Main.jsx ~ line 13 ~ useEffect ~ data', data);
      if (!data) {
        setTaskList([]);
        return;
      }
      setTaskList([...data]);
    } catch (err) {
      console.log(err);
      setTaskList([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div>
      <Header title='Список задач' />
      <AddTask taskList={taskList} setTaskList={setTaskList} />
      <List list={taskList} setList={setTaskList}  />
    </div>
  );
};
