import { useDispatch } from 'react-redux';
import { fetchCharacters } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  return (
    <div className='App'>
      123
      <button
        onClick={() => {
          dispatch(fetchCharacters());
        }}
      >
        Получить персонажей
      </button>
    </div>
  );
}

export default App;
