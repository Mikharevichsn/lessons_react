import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCharacters } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(getAllCharacters());
  }, []);

  return (
    <div className='App'>
      <ul>
        {characters.map((el) => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
