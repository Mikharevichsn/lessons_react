import { useState } from 'react';

export const Counter = () => {
  const [state, setState] = useState({
    counter: 15,
  });

  // const decrementCounter = () => {
  //   setCounter(counter - 1);
  // }

  return (
    <div>
      <h1>счётчик</h1>
      <h2>Текущее значение: {state.counter}</h2>
      <button onClick={
        () => setState(prevState => ({
          counter: prevState.counter + 1,
        }))
      }>+</button>
      {/* <button onClick={decrementCounter}>-</button> */}
    </div>
  );
};
