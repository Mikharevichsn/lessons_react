import React, { useContext } from 'react';
import Context from './Context';

export const Footer = () => {
  const store = useContext(Context);
  console.log('🚀 ~ file: Footer.jsx ~ line 6 ~ Footer ~ store', store)

  return (
    <div>
      <h2>Footer - {store.name}</h2>
    </div>
  )
}
