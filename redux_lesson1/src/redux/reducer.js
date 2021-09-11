import { ADD_TASK, DELETE_TASK, LOGIN, LOGOUT } from './actionTypes';

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
     

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((el) => el.id !== action.payload),
      };

    case LOGIN:
      const { login, password } = action.payload;
      if (login === 'serjo' && password === 'root') {
        return {
          ...state,
          user: { userName: 'Serjo' },
          error: null,
        };
      }
      return {
        ...state,
        error: 'Неверные логин/пароль',
      };

    case LOGOUT:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};
