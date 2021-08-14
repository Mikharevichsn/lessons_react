import { useState } from 'react';
import './style.css';

export const Counter = ({
  initValue = 77,
  text,
}) => {

  console.log('initValue = ', initValue);
  const [counter, setCounter] = useState(initValue);
  const [chears, setChears] = useState(77);
  
  console.log('chears = ', chears);
  console.log('counter = ', counter);

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <div className="block">
        {text && <h5>текст: {text}</h5>}
        <h1>счётчик</h1>
        <h2>Текущее значение: {counter}</h2>
        <button
          onClick={
            () => setCounter(counter + 1)
            // () => setCounter((prevState) => prevState + 1)
          }
        >
          +
        </button>
        <button onClick={decrementCounter}>-</button>
      </div>
      <div className="block">
        <h1>не стейт переменная</h1>
        <h2>Текущее значение: {chears}</h2>
        <button
          onClick={
            () => {
              console.log('before = ', chears);
              setChears(chears + 1)
              console.log('after = ', chears);
            }
          }
        >
          +
        </button>
        <button onClick={decrementCounter}>-</button>
      </div>
    </div>
  );
};
