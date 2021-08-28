import { useState, useEffect, useRef } from 'react';

function RefExample() {
  const [counter, setCounter] = useState(10);
  const ref = useRef(0);
  const divRef = useRef(null);
  const inputRef = useRef(null);
  // console.dir('divRef.current = ', divRef.current);

  useEffect(() => {
    ref.current += 1;
    console.log('ref = ', ref);
  });

  return (
    <div ref={divRef} className='RefExample'>
      <h1>Сч: {counter}</h1>
      <input ref={inputRef} type="text" />
      <h2>Высота дива: {divRef.current?.clientHeight}</h2>
      <button onClick={() => setCounter(counter + 1)}>Кнопка</button>
      <button
        onClick={() => {
          console.dir(divRef.current);
          if (divRef.current) divRef.current.innerHTML = '<h1>Я новое значение!</h1>';
          console.dir(divRef.current);
        }}
      >
        Кнопка изменить высоту
      </button>
      <button onClick={() => inputRef.current.focus()}>Сделать инпут активным</button>
      <button onClick={() => inputRef.current.blur()}>Сделать инпут НЕ активным</button>
    </div>
  );
}

export default RefExample;
