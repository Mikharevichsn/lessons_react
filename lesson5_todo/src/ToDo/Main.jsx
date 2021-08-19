import React, { useEffect, useState } from 'react';
import { Header } from './Header';
import { List } from './List';

export const Main = () => {
  const [taskList, setTaskList] = useState(null);
  console.log('🚀 ~ file: Main.jsx ~ line 6 ~ Main ~ taskList', taskList);

  useEffect(() => {
    const data = [
      { text: 'Купить молоко' },
      { text: 'Сделать уборку' },
      { text: 'Выучить реакт' },
    ];

    setTaskList([...data]);
  }, []);

  return (
    <div>
      <Header title='Список задач' />
      <List list={taskList} />
    </div>
  );
};
