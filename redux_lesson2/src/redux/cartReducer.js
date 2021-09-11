import { createReducer } from '@reduxjs/toolkit';
import { addToCart, removeFromCart, incrementCartItem } from './actions';

export const cartReducer = createReducer([], {
  [addToCart]: (state, { payload }) => {
    if (state.some((el) => el.id === payload.id)) {
      return state.map((el) => {
        if (el.id === payload.id) {
          const elCopy = { ...el };
          elCopy.count += 1;
          elCopy.total = elCopy.count * elCopy.price;
          return elCopy;
        }

        return el;
      });
    }

    const cartItem = { ...payload };
    cartItem.count = 1;
    cartItem.total = cartItem.price;
    return [...state, cartItem];
  },

  [removeFromCart]: (state, { payload }) =>
    state.filter((el) => el.id !== payload),

  [incrementCartItem]: (state, { payload }) =>
    state.map((el) => {
      if (el.id === payload) {
        const elCopy = { ...el };
        elCopy.count += 1;
        elCopy.total = elCopy.count * elCopy.price;
        return elCopy;
      }
      return el;
    }),
});
