import React, { useState } from 'react';

export const AddTask = ({ taskList, setTaskList }) => {
  const [inputText, setInputText] = useState('');

  return (
    <div>
      <input
        type='text'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        type='button'
        onClick={() => {
          if (!inputText) return alert('Нужен текст');
          if (taskList && taskList.some((task) => task.text === inputText))
            return alert('Такая задача уже есть в списке');

          setTaskList((prevState) => [
            ...prevState,
            { text: inputText, isDone: false },
          ]);
          setInputText('');
        }}
      >
        Добавить задачу
      </button>
    </div>
  );
};
