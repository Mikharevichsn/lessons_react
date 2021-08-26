import React from 'react';

export const store = {
  name: 'Petr',
};

const MyContext = React.createContext(store);

export default MyContext;