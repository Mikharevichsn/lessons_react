import React, { useCallback, useMemo, useState, useEffect, useRef } from 'react';

export const UseMemoExample = () => {
  const [counter, setCounter] = useState(10);
  const [num, setNum] = useState(2);
  const [cash, setCash] = useState(3);
  const [list, setList] = useState([
    {title: 'Заголовок 1'},
    {title: 'Заголовок 2'},
    {title: 'Заголовок 3'},
    {title: 'Заголовок 4'},
    {title: 'Заголовок 5'},
  ]);
  

  const getRandomNumber = useMemo(() => {
    console.log('я генерю число');
    return 5000 * num;
    // return Math.round(Math.random() * 1000);
  }, [num]);

  // const getPrice = () => {
  //   console.log('я генерю cash');
  //   return 1000 * num * cash;
  // };

  const getPrice = useCallback(() => {
    console.log('я генерю cash');
    return 1000 * num * cash;
  }, [num, cash]);

  const funLink = useRef(getPrice);

  // useEffect(() => {
  //   console.log('useEffect');
  //   console.log(funLink.current);
  //   console.log(funLink.current === getPrice);
  // }, []);

  console.log(funLink.current);
  console.log(funLink.current === getPrice);

  const mapList = useMemo(() => {
    console.log('Вычисляю список');
    return list.map((el, i) => <li key={i}>{el.title}</li>);
  }, [list]);

  return (
    <div>
      <h1>Сч: {counter}</h1>
      <h2>Рандомное число: {getRandomNumber}</h2>
      <h2>Price: {getPrice()}</h2>
      {console.log(111)}
      <ul>
        {mapList}
      </ul>
      <button onClick={() => setCounter(counter + 1)}>Изменить counter</button>
      <button onClick={() => setNum(num + 1)}>Изменить num</button>
      
    </div>
  )
}
