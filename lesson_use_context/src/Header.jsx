import React, { useContext } from 'react';
import Context from './Context';

export const Header = () => {
  const { name } = useContext(Context);
  return (
    <div>
      <h2>Header - {name}</h2>
    </div>
  )
}
