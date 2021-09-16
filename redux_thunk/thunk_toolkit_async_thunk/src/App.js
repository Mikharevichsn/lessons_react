import { useDispatch, useSelector } from 'react-redux';
import { getAllCharacters } from './redux/actions';

function App() {
  // const characters = useSelector((state) => state.characters);
  // const charactersLoading = useSelector((state) => state.charactersLoading);
  const { characters, charactersLoading, error } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <button
        onClick={() => {
          dispatch(getAllCharacters());
        }}
      >
        Получить персонажей
      </button>
      {charactersLoading && <h2>Загружаю</h2>}
      {error && <h2 style={{ color: 'red' }}>{error}</h2>}
      <ul>
        {characters.map((el) => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
