import React, { useContext } from 'react';
import Context from './Context';

export const Main = () => {
  const { name } = useContext(Context);
  console.log('🚀 ~ file: Main.jsx ~ line 5555 ~ Main ~ name', name)
  return (
    <div>
      <h2>Main - {name}</h2>
    </div>
  )
}
