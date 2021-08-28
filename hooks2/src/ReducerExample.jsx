import React, { useReducer } from 'react';

export const ReducerExample = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };

      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter((el, ind) => ind !== action.payload),
        };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    tasks: [{ title: 'Купить хлеб' }],
  });

  return (
    <div>
      <ul>
        {state.tasks.map((task, i) => (
          <li key={i}>
            {task.title} - {i}
            <button
              onClick={() => dispatch({ type: 'DELETE_TASK', payload: i })}
            >
              Удалить задачу
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          dispatch({ type: 'ADD_TASK', payload: { title: 'Купить молоко' } })
        }
      >
        Добавить задачу
      </button>
    </div>
  );
};
