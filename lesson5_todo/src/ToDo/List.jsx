import React from 'react';
import cn from 'classnames';
import './List.css';

export const List = ({ list = [], setList }) => {
  console.log('🚀 ~ file: List.jsx ~ line 6 ~ List ~ list', list);

  const sortAZ = () => {
    setList([...list].sort((a, b) => {
      if (a.text < b.text) {
        return -1;
      }
      if (a.text > b.text) {
        return 1;
      }
      return 0;
    }));
  };

  const sortZA = () => {
    setList([...list].sort((a, b) => {
      if (a.text > b.text) {
        return -1;
      }
      if (a.text < b.text) {
        return 1;
      }
      return 0;
    }));
  };

  const sortShuffle = () => {
    setList([...list].sort((a, b) => {
      return Math.random() > 0.5 ? 1 : -1;
    }));
  };

  const makeItemDone = (id) => {
    setList(
      list.map((el) => {
        if (el.id === id) el.isDone = !el.isDone;
        return el;
      })
    );
  };

  const deleteItemFromList = (id) => {
    setList((prevState) => prevState.filter((el) => el.id !== id));
  };

  return (
    <>
      <button onClick={sortAZ}>Сортировка А - Я</button>
      <button onClick={sortZA}>Сортировка Я - А</button>
      <button onClick={sortShuffle}>Сортировка в случайном порядке</button>
      <ul>
        {list &&
          list.map((item, ind) => {
            return (
              <li
                key={item.id}
                className={cn('task', { 'task-done': item.isDone })}
              >
                {ind + 1} - {item.text}
                <button type='button' onClick={() => makeItemDone(item.id)}>
                  Завершить
                </button>
                <button
                  type='button'
                  onClick={() => deleteItemFromList(item.id)}
                >
                  Удалить
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
};
